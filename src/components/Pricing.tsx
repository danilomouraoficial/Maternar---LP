import { useState, useEffect, useRef } from 'react';
import { ShieldCheck } from 'lucide-react';

export default function Pricing() {
  const [annualSpots, setAnnualSpots] = useState(17);
  const [lifetimeSpots, setLifetimeSpots] = useState(8);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isFirstDropRef = useRef(true);

  // IntersectionObserver to activate countdown when visible
  useEffect(() => {
    let observer: IntersectionObserver;

    if ('IntersectionObserver' in window && sectionRef.current) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsVisible(true);
              if (observer) {
                observer.unobserve(entry.target);
              }
            }
          });
        },
        { threshold: 0.1 }
      );
      observer.observe(sectionRef.current);
    } else {
      setIsVisible(true);
    }

    return () => {
      if (observer) observer.disconnect();
    };
  }, []);

  // Countdown timer logic
  useEffect(() => {
    if (!isVisible) return;
    if (annualSpots <= 4 && lifetimeSpots <= 2) return;

    let delay: number;
    if (isFirstDropRef.current) {
      // First drop happens almost immediately (2 to 4 seconds)
      delay = Math.floor(Math.random() * (4000 - 2000 + 1)) + 2000;
    } else {
      // Calculate delay based on proximity to minimum limits
      const annualRemaining = annualSpots - 4; // 0 to 13
      const lifetimeRemaining = lifetimeSpots - 2; // 0 to 6
      const totalRemaining = annualRemaining + lifetimeRemaining; // 0 to 19
      const maxRemaining = 19;
      const ratio = totalRemaining / maxRemaining; // 1.0 down to 0.0

      if (ratio > 0.6) {
        // Fast range: 5 to 12 seconds when there are many spots left
        delay = Math.floor(Math.random() * (12000 - 5000 + 1)) + 5000;
      } else if (ratio > 0.3) {
        // Medium range: 15 to 30 seconds
        delay = Math.floor(Math.random() * (30000 - 15000 + 1)) + 15000;
      } else {
        // Slow range (near the end): 45 to 80 seconds
        delay = Math.floor(Math.random() * (80000 - 45000 + 1)) + 45000;
      }
    }

    const timer = setTimeout(() => {
      isFirstDropRef.current = false;

      const canDecAnnual = annualSpots > 4;
      const canDecLifetime = lifetimeSpots > 2;

      if (canDecAnnual && canDecLifetime) {
        // Randomly choose one, biasing slightly towards annual since it has more starting spots
        const rand = Math.random();
        if (rand < 0.65) {
          setAnnualSpots((prev) => prev - 1);
        } else {
          setLifetimeSpots((prev) => prev - 1);
        }
      } else if (canDecAnnual) {
        setAnnualSpots((prev) => prev - 1);
      } else if (canDecLifetime) {
        setLifetimeSpots((prev) => prev - 1);
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [isVisible, annualSpots, lifetimeSpots]);

  return (
    <section id="planos" ref={sectionRef} className="pricing-section fade-in">
      <div className="container">
        {/* Top Editorial Header */}
        <div className="pricing-header-editorial">
          <span className="eyebrow">Investimento Inteligente</span>
          <h2 className="pricing-title-editorial balance-text">
            Um porto seguro para a rotina do seu{"\u00a0"}bebê
          </h2>
          <p className="pricing-subtitle-editorial">
            Centralize vacinas, rotinas de sono, amamentação e cuidados do bebê em um só lugar. <br className="desktop-only-br" />Escolha o plano ideal e garanta mais tranquilidade hoje.
          </p>
        </div>

        {/* Layout de Preços simplificado (2 colunas) */}
        <div className="pricing-master-container">

          {/* Card 1: Plano Anual */}
          <div id="opcoes-planos" className="pricing-card pricing-card--annual">
            <div className="plan-panel-header">
              <span className="plan-tag">PLANO ANUAL</span>
              <h3 className="plan-name">Acesso Anual</h3>
              <div className="plan-price">
                <span className="price-number">R$ 47,90</span>
                <span className="price-period">/ano</span>
              </div>
              <p className="plan-discount">Equivale a menos de R$ 4,00 por mês. Renovação{"\u00a0"}automática.</p>
            </div>

            <div className="plan-divider" />

            <ul className="plan-features-list">
              <li>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>Todas as funcionalidades inclusas</span>
              </li>
              <li>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>Rede de apoio integrada para até 3 celulares</span>
              </li>
              <li>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span><strong>Bônus:</strong> Biblioteca Maternar completa</span>
              </li>
              <li>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span><strong>Bônus:</strong> Exercícios de ancoragem mental</span>
              </li>
              <li>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span><strong>Bônus:</strong> Tabela de dosagens pediátricas</span>
              </li>
              <li>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>Alertas de vacinas e consultas</span>
              </li>
              <li>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>Suporte prioritário por e-mail</span>
              </li>
            </ul>

            <div className="plan-scarcity">
              <span className="scarcity-dot" />
              <span>Restam apenas {annualSpots} vagas com valor promocional</span>
            </div>

            <a href="https://pay.cakto.com.br/thv5jij_918353" className="plan-btn-action plan-btn-action--green">Começar Plano Anual</a>
            
            <div className="plan-reassurance">
              <ShieldCheck size={13} strokeWidth={2.5} className="reassurance-icon" />
              <span>Compra 100% segura • 7 dias de garantia</span>
            </div>
          </div>

          {/* Card 2: Plano Vitalício */}
          <div className="pricing-card pricing-card--lifetime">
            <span className="plan-badge-ribbon">Mais Inteligente</span>

            <div className="plan-panel-header">
              <span className="plan-tag plan-tag--accent">PAGUE UMA ÚNICA VEZ</span>
              <h3 className="plan-name">Acesso Vitalício</h3>
              <div className="plan-price">
                <span className="price-number">R$ 87,90</span>
                <span className="price-period">único</span>
              </div>
              <p className="plan-discount">Preço especial de lançamento. Sem taxas de renovação.</p>
            </div>

            <div className="plan-divider" />

            <ul className="plan-features-list">
              <li>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>Todas as funcionalidades premium para sempre</span>
              </li>
              <li>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>Rede de apoio integrada para até 3 celulares</span>
              </li>
              <li>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span><strong>Bônus:</strong> Biblioteca Maternar completa</span>
              </li>
              <li>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span><strong>Bônus:</strong> Exercícios de ancoragem mental</span>
              </li>
              <li>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span><strong>Bônus:</strong> Tabela de dosagens + Contatos de emergência</span>
              </li>
              <li>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>Exportação de relatórios PDF ilimitados</span>
              </li>
              <li>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>Todos os futuros lançamentos inclusos</span>
              </li>
            </ul>

            <div className="plan-scarcity plan-scarcity--dark">
              <span className="scarcity-dot scarcity-dot--dark" />
              <span>Restam apenas {lifetimeSpots} vagas com valor promocional único</span>
            </div>

            <a href="https://pay.cakto.com.br/8nhuewm" className="plan-btn-action plan-btn-action--filled">Garantir Acesso Vitalício</a>
            
            <div className="plan-reassurance plan-reassurance--dark">
              <ShieldCheck size={13} strokeWidth={2.5} className="reassurance-icon" />
              <span>Compra 100% segura • 7 dias de garantia</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
