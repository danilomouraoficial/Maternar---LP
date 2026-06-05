export default function Pullquote() {
  return (
    <section className="manifesto-section fade-in">
      {/* Linhas de Grade Editoriais */}
      <div className="manifesto-grid-line manifesto-grid-line--vert" aria-hidden="true" />
      <div className="manifesto-grid-line manifesto-grid-line--horiz" aria-hidden="true" />
      
      {/* Aspas Gigantes de Fundo */}
      <span className="manifesto-watermark manifesto-watermark--open" aria-hidden="true">“</span>
      <span className="manifesto-watermark manifesto-watermark--close" aria-hidden="true">”</span>

      <div className="container manifesto-container">
        {/* Rótulo Lateral Rotacionado */}
        <div className="manifesto-sidebar">
          <span className="manifesto-label">MANIFESTO MATERNAR</span>
        </div>

        {/* Bloco de Citação Principal */}
        <div className="manifesto-content">
          <blockquote className="manifesto-quote-text balance-text">
            Você não é desorganizada. É que ninguém nunca criou uma ferramenta pensada para o trabalho{" "}
            <em className="manifesto-highlight">real</em> que é ser{"\u00a0"}mãe.
          </blockquote>
          
          <div className="manifesto-footer-accent">
            <span className="manifesto-line" />
            <span className="manifesto-footer-text">O COMPROMISSO</span>
          </div>
        </div>
      </div>
    </section>
  );
}

