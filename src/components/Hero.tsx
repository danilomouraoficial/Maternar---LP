import { useState } from 'react';
import { Check } from 'lucide-react';
import homeMockup from '../assets/brand/mockup/New/home.png';

const HERO_IMAGES = [
  {
    src: '/img1.png',
    alt: 'Mãe abraçando seu bebê com carinho em um momento de afeto e conexão'
  },
  {
    src: '/img2.png',
    alt: 'Mãe beijando seu bebê com carinho em um ambiente aconchegante e ensolarado'
  }
];

export default function Hero() {
  const [selectedImage] = useState(() => {
    const randomIndex = Math.floor(Math.random() * HERO_IMAGES.length);
    return HERO_IMAGES[randomIndex];
  });

  return (
    <section className="hero fade-in">
      {/* Linhas Decorativas Editoriais no Fundo */}
      <div className="hero-editorial-line hero-editorial-line--vert" aria-hidden="true" />
      <div className="hero-editorial-line hero-editorial-line--horiz" aria-hidden="true" />

      <div className="container hero-editorial-container">
        <div className="hero-content">
          <span className="eyebrow">Você cuida do mundo inteiro</span>
          <h1 className="headline-xl balance-text">
            Deixe a gente cuidar da sua{"\u00a0"}<em>memória</em>.
          </h1>
          <p className="body-lg hero-subheadline">
            O primeiro aplicativo brasileiro que centraliza as vacinas, remédios e consultas do seu bebê, enquanto protege
            o seu próprio bem-estar no puerpério.
          </p>
          <div className="hero-cta-wrapper">
            <a href="#planos" className="btn">Quero organizar minha rotina</a>
            <div className="hero-trust-info">
              <div className="hero-trust-item">
                <Check size={14} className="hero-trust-icon-check" strokeWidth={3} />
                <span>Acesso imediato</span>
              </div>
              <span className="hero-trust-sep">·</span>
              <div className="hero-trust-item">
                <Check size={14} className="hero-trust-icon-check" strokeWidth={3} />
                <span>Sem cobranças surpresas</span>
              </div>
              <span className="hero-trust-sep">·</span>
              <div className="hero-trust-item">
                <Check size={14} className="hero-trust-icon-check" strokeWidth={3} />
                <span>Garantia de 7 dias</span>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-visual-editorial">
          {/* Fundo geométrico sutil */}
          <div className="hero-visual-bg-card" aria-hidden="true" />
          
          <div className="hero-image-wrapper-editorial">
            <img src={selectedImage.src} alt={selectedImage.alt} />
          </div>

          {/* Mockup de alta qualidade (home.png da pasta New) com sobreposição e inclinação */}
          <div className="phone-mockup-editorial">
            <img src={homeMockup} alt="Painel do Maternar App" />
          </div>
        </div>
      </div>
    </section>
  );
}

