import { useEffect, useState } from 'react';
import { MotionConfig } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Pain from './components/Pain';
import Pullquote from './components/Pullquote';
import Features from './components/Features';
import ForWho from './components/ForWho';
import Bonuses from './components/Bonuses';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import Obrigado from './components/Obrigado';

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

    const fadeElements = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // Deixa de observar após animar
        }
      });
    }, observerOptions);

    fadeElements.forEach((el) => observer.observe(el));

    // Cleanup observer on unmount
    return () => {
      observer.disconnect();
    };
  }, []);

  if (isObrigado) {
    return (
      <MotionConfig reducedMotion={isMobile ? "always" : "user"}>
        <Obrigado />
      </MotionConfig>
    );
  }

  return (
    <MotionConfig reducedMotion={isMobile ? "always" : "user"}>
      <Navbar />
      <Hero />
      <Pain />
      <Pullquote />
      <Features />
      <ForWho />
      <Bonuses />
      <Testimonials />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </MotionConfig>
  );
}

export default App;
