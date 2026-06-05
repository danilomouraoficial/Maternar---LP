import { ShieldCheck } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="section closing fade-in">
      <div className="container closing-content">
        <div className="closing-text-wrapper">
          <span className="eyebrow">Paz Mental ao Seu Alcance</span>
          <h2 className="headline-lg balance-text">A sua cabeça merece este{"\u00a0"}<em>respiro</em>.</h2>
          <p className="body-lg balance-text">
            Garanta a organização que sua família precisa e traga leveza para o seu{"\u00a0"}puerpério.
          </p>
        </div>

        <a href="#planos" className="btn btn--dark">Garantir Meu Acesso</a>

        <div className="closing-guarantee">
          <div className="closing-guarantee-icon">
            <ShieldCheck size={36} strokeWidth={2} />
          </div>
          <div className="closing-guarantee-text">
            <h4>Garantia Incondicional de 7 dias</h4>
            <p>Experimente sem pressa. Se não gostar, devolvemos seu dinheiro sem burocracia.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
