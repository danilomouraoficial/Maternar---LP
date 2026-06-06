// Declare global types for TypeScript compatibility
declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    dataLayer?: any[];
    metaTestEventCode?: string;
    _lastMetaEventPath?: string;
  }
}

// Initialize dataLayer immediately at the very top of execution
window.dataLayer = window.dataLayer || [];

// Capture Meta Ads event testing parameters immediately
export function captureMetaParameters() {
  try {
    const urlParams = new URLSearchParams(window.location.search);
    const fbadid = urlParams.get('_fbadid');
    const fbclid = urlParams.get('fbclid');

    // 1. Save parameters to sessionStorage if they are in the URL
    if (fbadid) {
      sessionStorage.setItem('_fbadid', fbadid);
    }
    if (fbclid) {
      sessionStorage.setItem('fbclid', fbclid);
    }

    // 2. Retrieve active fbadid (either from URL or from sessionStorage for subsequent navigation)
    const activeFbadid = fbadid || sessionStorage.getItem('_fbadid');

    if (activeFbadid) {
      // Expose globally for GTM Web tag access
      window.metaTestEventCode = activeFbadid;

      // 3. Prevent duplicate pushes for the exact same path/query combination
      const currentPath = window.location.pathname + window.location.search;
      if (window._lastMetaEventPath !== currentPath) {
        window._lastMetaEventPath = currentPath;

        window.dataLayer = window.dataLayer || [];
        window.dataLayer?.push({
          event: 'meta_test_event_captured',
          metaTestEventCode: activeFbadid
        });
      }
    }
  } catch (error) {
    console.error('Error capturing Meta Ads URL parameters:', error);
  }
}

// Run immediately on file load
captureMetaParameters();

// Intercept routing changes for SPAs (Client-side routing)
try {
  window.addEventListener('popstate', captureMetaParameters);

  const originalPushState = history.pushState;
  history.pushState = function (...args) {
    originalPushState.apply(this, args);
    captureMetaParameters();
  };

  const originalReplaceState = history.replaceState;
  history.replaceState = function (...args) {
    originalReplaceState.apply(this, args);
    captureMetaParameters();
  };
} catch (e) {
  console.error('Error binding routing listeners:', e);
}
