export default function ForWho() {
  return (
    <section className="section section--sand fade-in">
      <div className="container">
        
        {/* Section Header */}
        <div className="qual-header">
          <span className="eyebrow eyebrow--green">Decisão Consciente</span>
          <h2 className="headline-lg balance-text">O Maternar é para você?</h2>
          <p className="body-lg balance-text">
            Uma divisão honesta para ajudar você a decidir se este é o momento certo para colocar sua rotina nos eixos.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="qual-grid">
          {/* Lado Esquerdo: É para você se... */}
          <div className="qual-card qual-card--yes">
            <h3 className="qual-title">
              É para você se...
            </h3>
            <ul className="qual-list">
              <li className="qual-item">
                <svg className="qual-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>Seu bebê tem entre 0 e 4 anos e a rotina é imprevisível.</span>
              </li>
              <li className="qual-item">
                <svg className="qual-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>Você quer parar de depender da memória ou de anotações soltas no WhatsApp.</span>
              </li>
              <li className="qual-item">
                <svg className="qual-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>Quer chegar na consulta médica sabendo responder todo o histórico com segurança.</span>
              </li>
              <li className="qual-item">
                <svg className="qual-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>Deseja compartilhar a responsabilidade do cuidado do bebê de forma real.</span>
              </li>
            </ul>
          </div>

          {/* Lado Direito: Não é para você se... */}
          <div className="qual-card qual-card--no">
            <h3 className="qual-title">
              Não é para você se...
            </h3>
            <ul className="qual-list">
              <li className="qual-item">
                <svg className="qual-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
                <span>Você prefere agendas físicas de papel e planilhas complexas de computador.</span>
              </li>
              <li className="qual-item">
                <svg className="qual-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
                <span>Não quer ter o trabalho de 30 segundos diários para registrar os momentos essenciais.</span>
              </li>
              <li className="qual-item">
                <svg className="qual-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
                <span>Está buscando um substituto clínico para o diagnóstico e acompanhamento do seu pediatra.</span>
              </li>
            </ul>
          </div>
        </div>

      {/* CTA Section */}
      <div className="qual-cta-wrapper">
        <a href="#planos" className="btn">Quero organizar minha rotina</a>
      </div>

    </div>
    </section>
  );
}
