export default function Pricing() {
  return (
    <section id="planos" className="pricing-section fade-in">
      <div className="container">
        {/* Top Editorial Header */}
        <div className="pricing-header-editorial">
          <span className="eyebrow">Investimento Inteligente</span>
          <h2 className="pricing-title-editorial balance-text">
            Um porto seguro para a rotina do seu{"\u00a0"}bebê
          </h2>
          <p className="pricing-subtitle-editorial">
            Em vez de pagar assinaturas separadas para o controle de vacinas, remédios e diário de sono, centralize tudo em uma ferramenta única.
          </p>
        </div>

        {/* Layout Bento Grid de Preços */}
        <div className="pricing-master-container">
          
          {/* Card 1: Comparativo de Mercado */}
          <div className="pricing-card pricing-card--comparison">
            <div className="ledger-header">
              <div className="ledger-icon-wrapper">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="2" x2="12" y2="22"></line>
                  <line x1="5" y1="7" x2="19" y2="7"></line>
                  <path d="M5 7L2 17h6L5 7z"></path>
                  <path d="M19 7l-3 10h6l-3-10z"></path>
                </svg>
              </div>
              <h3 className="ledger-title">Comparativo de Mercado</h3>
            </div>
            
            <p className="ledger-subtitle">
              Contratando ferramentas individuais separadas versus a assinatura unificada Maternar:
            </p>
            
            <div className="ledger-table">
              <div className="ledger-row">
                <span>App premium de vacinas</span>
                <span>R$ 49,90/ano</span>
              </div>
              <div className="ledger-row">
                <span>App premium de rotinas do bebê</span>
                <span>R$ 79,90/ano</span>
              </div>
              <div className="ledger-row">
                <span>Diário de saúde mental materno</span>
                <span>R$ 59,90/ano</span>
              </div>
              <div className="ledger-row ledger-row--total">
                <span>Custo se contratados separados</span>
                <span className="ledger-price-old">R$ 189,70/ano</span>
              </div>
            </div>
          </div>

          {/* Card 2: Selo de Segurança Bento (Standalone) */}
          <div className="pricing-card pricing-card--security">
            <div className="security-icon-wrapper">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                <polyline points="9 11 11 13 15 9"></polyline>
              </svg>
            </div>
            <span className="security-text">
              Compra 100% Segura. Garantia de 7 dias ou seu dinheiro de volta.
            </span>
          </div>

          {/* Card 3: Plano Anual */}
          <div className="pricing-card pricing-card--annual">
            <div className="plan-panel-header">
              <span className="plan-tag">PLANO ANUAL</span>
              <h3 className="plan-name">Acesso Anual</h3>
              <div className="plan-price">
                <span className="price-number">R$ 47,90</span>
                <span className="price-period">/ano</span>
              </div>
              <p className="plan-discount">Equivale a menos de R$ 4,00 por mês. Renovação automática.</p>
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
                <span>Alertas automáticos de vacinação</span>
              </li>
              <li>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>Suporte prioritário por e-mail</span>
              </li>
            </ul>

            <a href="https://pay.kiwify.com.br/1QraVr7" className="plan-btn-action plan-btn-action--outline">Começar Plano Anual</a>
          </div>

          {/* Card 4: Plano Vitalício */}
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
                <span>Exportação de relatórios PDF ilimitados</span>
              </li>
              <li>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>Todos os futuros lançamentos inclusos</span>
              </li>
            </ul>

            <a href="https://pay.kiwify.com.br/qqFVfMV" className="plan-btn-action plan-btn-action--filled">Garantir Acesso Vitalício</a>
          </div>

        </div>
      </div>
    </section>
  );
}
