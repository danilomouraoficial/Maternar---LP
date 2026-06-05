export default function FAQ() {
  return (
    <section className="section section--sand fade-in">
      <div className="container">
        <div className="faq-intro">
          <span className="eyebrow eyebrow--green">Respostas Diretas</span>
          <h2 className="headline-lg">Dúvidas Frequentes</h2>
        </div>

        <div className="faq-list">
          {/* FAQ 1 */}
          <details className="faq-item">
            <summary className="faq-question">Funciona para bebê de qualquer idade até 4 anos?</summary>
            <div className="faq-answer">
              Sim. O aplicativo cobre desde o nascimento, ajustando automaticamente o calendário oficial do Ministério da
              Saúde (PNI) e os marcos de desenvolvimento do seu bebê até completar 4 anos de idade.
            </div>
          </details>

          {/* FAQ 2 */}
          <details className="faq-item">
            <summary className="faq-question">Posso ter mais de um bebê no mesmo app?</summary>
            <div className="faq-answer">
              Sim. Você pode cadastrar múltiplos bebês e alternar entre os perfis na tela inicial. Cada bebê mantém seu
              próprio histórico de saúde, calendário de vacinas, diário e dados independentes.
            </div>
          </details>

          {/* FAQ 3 */}
          <details className="faq-item">
            <summary className="faq-question">O pai ou a babá podem usar junto comigo?</summary>
            <div className="faq-answer">
              Sim. A sincronização de Rede de Apoio permite convidar até 2 acompanhantes (pai, avós ou babá) para que
              registrem e visualizem todas as atividades do bebê em tempo real nos seus próprios aparelhos.
            </div>
          </details>

          {/* FAQ 4 */}
          <details className="faq-item">
            <summary className="faq-question">O app substitui o acompanhamento do pediatra?</summary>
            <div className="faq-answer">
              Não, e jamais substituirá. O Maternar organiza informações e dúvidas ao longo do mês para que você aproveite
              melhor as consultas, mas toda decisão médica e diagnóstico cabe exclusivamente ao pediatra.
            </div>
          </details>

          {/* FAQ 7 */}
          <details className="faq-item">
            <summary className="faq-question">Qual a diferença real entre o anual e o vitalício?</summary>
            <div className="faq-answer">
              O anual renova a cada 12 meses por R$ 47,90. O vitalício é um pagamento único de R$ 87,90 para acesso
              permanente, incluindo todas as atualizações e futuros recursos sem nenhuma cobrança adicional.
            </div>
          </details>
        </div>
      </div>
    </section>
  );
}
