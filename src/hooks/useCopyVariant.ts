import { useEffect, useState } from 'react';
import { COPY_VARIANTS, DEFAULT_VARIANT_KEY } from '../config/copyVariants';
import type { CopyVariant } from '../config/copyVariants';

export function useCopyVariant(): CopyVariant {
  const [path, setPath] = useState(() => typeof window !== 'undefined' ? window.location.pathname : '/');

  useEffect(() => {
    const handlePathChange = () => {
      setPath(window.location.pathname);
    };

    window.addEventListener('popstate', handlePathChange);

    // Intercept SPA routing changes
    const originalPushState = history.pushState;
    const originalReplaceState = history.replaceState;

    history.pushState = function (...args) {
      originalPushState.apply(this, args);
      handlePathChange();
    };

    history.replaceState = function (...args) {
      originalReplaceState.apply(this, args);
      handlePathChange();
    };

    return () => {
      window.removeEventListener('popstate', handlePathChange);
      history.pushState = originalPushState;
      history.replaceState = originalReplaceState;
    };
  }, []);

  const getVariantKey = (currentPath: string): string => {
    // 1. Check path e.g., /v1, /v2, /v3, /v4, /v5
    const match = currentPath.match(/^\/(v[1-5])(?:\/|$)/);
    if (match) {
      return match[1];
    }

    // 2. Check query parameter as fallback (?v=v2 or ?variant=v2 or ?v=2)
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const qv = params.get('v') || params.get('variant');
      if (qv) {
        const cleaned = qv.toLowerCase();
        if (COPY_VARIANTS[cleaned]) {
          return cleaned;
        }
        if (/^[1-5]$/.test(cleaned)) {
          return `v${cleaned}`;
        }
      }
    }

    return DEFAULT_VARIANT_KEY;
  };

  const variantKey = getVariantKey(path);
  const variant = COPY_VARIANTS[variantKey] || COPY_VARIANTS[DEFAULT_VARIANT_KEY];

  // Tracking details and window variable export
  useEffect(() => {
    if (typeof window !== 'undefined') {
      (window as any).activeCopyVariant = variant.id;
      (window as any).activeCopyVariantName = variant.name;

      // Push event to GTM dataLayer
      (window as any).dataLayer = (window as any).dataLayer || [];
      (window as any).dataLayer.push({
        event: 'ab_test_variant_load',
        variant_id: variant.id,
        variant_name: variant.name,
        path: path
      });
    }
  }, [variant, path]);

  return variant;
}
export default useCopyVariant;
