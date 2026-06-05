export default function Bonuses() {
  return (
    <section className="section fade-in">
      <div className="container">
        <div className="faq-intro">
          <span className="eyebrow">Apoio Completo</span>
          <h2 className="headline-lg balance-text">Presentes exclusivos incluídos no seu{"\u00a0"}acesso</h2>
          <p className="body-lg" style={{ maxWidth: '600px', margin: '0 auto' }}>
            Para garantir que você passe pelo pós-parto com o máximo de suporte, preparamos 4 bônus especiais e práticos.
          </p>
        </div>

        <div className="bonus-grid">
          {/* Bônus 1 */}
          <div className="bonus-card">
            <div className="bonus-number">01</div>
            <div className="bonus-info">
              <h3 className="bonus-title">Biblioteca Maternar</h3>
              <p className="bonus-text">
                Artigos objetivos, sem anúncios, organizados por categorias essenciais: cólica e refluxo, crises de sono,
                amamentação e saltos de desenvolvimento.
              </p>
            </div>
          </div>

          {/* Bônus 2 */}
          <div className="bonus-card">
            <div className="bonus-number">02</div>
            <div className="bonus-info">
              <h3 className="bonus-title">Rede de apoio sincronizada</h3>
              <p className="bonus-text">
                Sincronização real para até 3 celulares (pai, babá ou avós). Todos registram no próprio aparelho e as
                informações atualizam na hora no seu celular.
              </p>
            </div>
          </div>

          {/* Bônus 3 */}
          <div className="bonus-card">
            <div className="bonus-number">03</div>
            <div className="bonus-info">
              <h3 className="bonus-title">Exercícios de ancoragem</h3>
              <p className="bonus-text">
                Sessões de respiração guiada de 2 minutos no próprio aplicativo, ideais para acalmar a mente nos momentos
                de choro intenso ou pico de exaustão.
              </p>
            </div>
          </div>

          {/* Bônus 4 */}
          <div className="bonus-card">
            <div className="bonus-number">04</div>
            <div className="bonus-info">
              <h3 className="bonus-title">Tabela de dosagens + Telefones úteis</h3>
              <p className="bonus-text">
                Tabela de dosagens pediátricas comuns por peso do bebê e atalhos rápidos para chamadas de emergência
                (SAMU, CVS e plantão pediátrico).
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
