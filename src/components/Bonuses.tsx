import bonus1Img from '../assets/brand/mockup/mkp bonus 1.webp';
import bonus2Img from '../assets/brand/mockup/mkp bonus 2.webp';
import bonus3Img from '../assets/brand/mockup/mkp bonus 3.webp';
import bonus4Img from '../assets/brand/mockup/mkp bonus 4.webp';
import { ShieldCheck } from 'lucide-react';

const BONUSES_DATA = [
  {
    id: 1,
    title: "Biblioteca Maternar",
    description: "Artigos objetivos, sem anúncios, organizados por categorias essenciais: cólica e refluxo, crises de sono, amamentação e saltos de desenvolvimento.",
    image: bonus1Img,
    alt: "Mockup Biblioteca Maternar"
  },
  {
    id: 2,
    title: "Rede de apoio sincronizada",
    description: "Sincronização real para até 3 celulares (pai, babá ou avós). Todos registram no próprio aparelho e as informações atualizam na hora no seu celular.",
    image: bonus2Img,
    alt: "Mockup Rede de Apoio"
  },
  {
    id: 3,
    title: "Exercícios de ancoragem",
    description: "Sessões de respiração guiada de 2 minutos no próprio aplicativo, ideais para acalmar a mente nos momentos de choro intenso ou pico de exaustão.",
    image: bonus3Img,
    alt: "Mockup Exercícios de Ancoragem"
  },
  {
    id: 4,
    title: "Tabela de dosagens + Telefone úteis",
    description: "Tabela de dosagens pediátricas comuns por peso do bebê e atalhos rápidos para chamadas de emergência (SAMU, CVS e plantão pediátrico).",
    image: bonus4Img,
    alt: "Mockup Tabela de Dosagens"
  }
];

export default function Bonuses() {
  return (
    <section className="section fade-in">
      <div className="container">
        <div className="faq-intro">
          <span className="eyebrow">Apoio Completo</span>
          <h2 className="headline-lg balance-text">
            Presentes{" "}
            <span className="highlight-underline">
              exclusivos
              <svg className="highlight-underline-svg" viewBox="0 0 100 10" preserveAspectRatio="none" aria-hidden="true">
                <path d="M0,5 Q50,10 100,5" stroke="currentColor" strokeWidth="3" fill="transparent" strokeLinecap="round" />
              </svg>
            </span>{" "}
            incluídos no seu acesso
          </h2>
          <p className="body-lg mx-auto max-w-2xl mt-4" style={{ color: 'var(--text-muted)' }}>
            Para garantir que você passe pelo pós-parto com o máximo de suporte, preparamos <span style={{ color: 'var(--coral)', fontWeight: 'bold' }}>4 bônus</span> especiais e práticos.
          </p>
        </div>

        <div className="bonus-grid">
          {BONUSES_DATA.map((bonus) => (
            <div key={bonus.id} className="bonus-card">
              <div className="bonus-visual">
                <img src={bonus.image} alt={bonus.alt} loading="lazy" width={270} height={222} />
              </div>
              <div className="bonus-info">
                <h3 className="bonus-title">{bonus.title}</h3>
                <p className="bonus-text">{bonus.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Banner de suporte inferior */}
        <div className="bonus-banner">
          <div className="bonus-banner-left">
            <div className="bonus-banner-check">
              <ShieldCheck size={22} strokeWidth={2} />
            </div>
            <p className="bonus-banner-text">
              Tudo pensado para te dar tranquilidade, segurança e mais tempo para o que realmente importa: <br className="hidden md:inline" /><strong>você e o seu bebê.</strong>
            </p>
          </div>
          <div className="bonus-banner-divider" />
          <div className="bonus-banner-right">
            <div className="bonus-balloon">Você não está sozinha. ♡</div>
            <img src="/img1.webp" alt="Mãe e bebê" className="bonus-avatar" width={48} height={48} loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
}
