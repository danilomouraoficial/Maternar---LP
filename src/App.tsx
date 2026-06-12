import { useEffect, useState, Suspense, lazy } from 'react';
import { MotionConfig } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LazySection from './components/LazySection';

// Lazy loaded components (Code Splitting)
const Pain = lazy(() => import('./components/Pain'));
const Pullquote = lazy(() => import('./components/Pullquote'));
const Features = lazy(() => import('./components/Features'));
const FinalCTA = lazy(() => import('./components/FinalCTA'));
const Footer = lazy(() => import('./components/Footer'));
const Obrigado = lazy(() => import('./components/Obrigado'));
const ForWho = lazy(() => import('./components/ForWho'));
const Bonuses = lazy(() => import('./components/Bonuses'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const Pricing = lazy(() => import('./components/Pricing'));
const Warranty = lazy(() => import('./components/Warranty'));
const FAQ = lazy(() => import('./components/FAQ'));

function App() {
  const [isMobile, setIsMobile] = useState(() => typeof window !== 'undefined' ? window.matchMedia('(max-width: 768px)').matches : false);
  const [isObrigado, setIsObrigado] = useState(() => {
    return typeof window !== 'undefined' && window.location.pathname === '/obrigado';
  });

  useEffect(() => {
    const handleLocationChange = () => {
      setIsObrigado(window.location.pathname === '/obrigado');
    };

    window.addEventListener('popstate', handleLocationChange);

    // Dynamic state interception for pushState / replaceState (SPA-like routing)
    const originalPushState = history.pushState;
    history.pushState = function (...args) {
      originalPushState.apply(this, args);
      handleLocationChange();
    };

    const originalReplaceState = history.replaceState;
    history.replaceState = function (...args) {
      originalReplaceState.apply(this, args);
      handleLocationChange();
    };

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      history.pushState = originalPushState;
      history.replaceState = originalReplaceState;
    };
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      if (anchor && anchor.getAttribute('href') === '#planos' && window.innerWidth <= 768) {
        const targetElement = document.getElementById('opcoes-planos');
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({ behavior: 'smooth' });
          window.history.pushState(null, '', '#opcoes-planos');
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  useEffect(() => {
    // Intersection Observer para animações de fade-in no scroll
    const observerOptions = {
      root: null,
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // Deixa de observar após animar
        }
      });
    }, observerOptions);

    // Como alguns componentes são carregados com lazy loading (Suspense),
    // precisamos monitorar a inserção de novos elementos .fade-in no DOM.
    const observedElements = new WeakSet<Element>();
    
    const observeNewElements = () => {
      const fadeElements = document.querySelectorAll('.fade-in:not(.visible)');
      fadeElements.forEach((el) => {
        if (!observedElements.has(el)) {
          observer.observe(el);
          observedElements.add(el);
        }
      });
    };

    // Observa os elementos já presentes no DOM inicial
    observeNewElements();

    // Monitora novas renderizações/montagens de elementos lazy-loaded
    const mutationObserver = new MutationObserver(() => {
      observeNewElements();
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    // Cleanup observers on unmount
    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  if (isObrigado) {
    return (
      <MotionConfig reducedMotion={isMobile ? "always" : "user"}>
        <Suspense fallback={<div className="min-h-screen bg-[#FCFAF5]" />}>
          <Obrigado />
        </Suspense>
      </MotionConfig>
    );
  }

  return (
    <MotionConfig reducedMotion={isMobile ? "always" : "user"}>
      <Navbar />
      <Hero />
      <LazySection height="500px"><Pain /></LazySection>
      <LazySection height="250px"><Pullquote /></LazySection>
      <LazySection height="600px"><Features /></LazySection>
      <LazySection height="500px"><ForWho /></LazySection>
      <LazySection height="600px"><Bonuses /></LazySection>
      <LazySection height="600px"><Testimonials /></LazySection>
      <LazySection height="800px"><Pricing /></LazySection>
      <LazySection height="400px"><Warranty /></LazySection>
      <LazySection height="500px"><FAQ /></LazySection>
      <LazySection height="350px"><FinalCTA /></LazySection>
      <LazySection height="200px"><Footer /></LazySection>
    </MotionConfig>
  );
}

export default App;
