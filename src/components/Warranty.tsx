import warrantySeal from '../assets/selo-garantia.webp';

export default function Warranty() {
  return (
    <section className="section section--warranty fade-in" id="garantia">
      <div className="container">
        <div className="warranty-card">
          <div className="warranty-image-wrapper">
            <img 
              src={warrantySeal} 
              alt="Selo de Garantia Incondicional de 7 dias" 
              className="warranty-seal-img"
              loading="lazy"
            />
          </div>
          <div className="warranty-info-wrapper">
            <span className="eyebrow eyebrow--green">Compromisso Maternar</span>
            <h2 className="headline-md balance-text">Sua tranquilidade é nossa prioridade absoluta</h2>
            <p className="body-md">
              Acreditamos tanto na transformação que o <strong>Maternar</strong> trará para a rotina da sua família que assumimos todo o risco por você. Ao garantir seu acesso hoje, você ganha <strong>7 dias completos</strong> para testar tudo de forma livre e ilimitada.
            </p>
            <p className="body-md">
              Registre a rotina, sincronize o celular com o pai ou babá, use as tabelas de dosagens e explore todas as ferramentas. Se em até 7 dias você sentir que o app não é o que você precisava, basta solicitar o reembolso. Devolvemos <strong>100% do seu dinheiro</strong> de forma imediata, sem letras miúdas e sem qualquer complicação.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
