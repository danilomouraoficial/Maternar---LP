import card1Img from '../assets/brand/mockup/card app 1.webp';
import card2Img from '../assets/brand/mockup/card app 2.webp';
import card3Img from '../assets/brand/mockup/card app 3.webp';
import card4Img from '../assets/brand/mockup/card app 4.webp';
import card5Img from '../assets/brand/mockup/card app 5.webp';
import card6Img from '../assets/brand/mockup/card app 6.webp';
import card7Img from '../assets/brand/mockup/card app 7.webp';
import { Check } from 'lucide-react';

const FEATURES_DATA = [
  {
    id: 1,
    title: "Diário completo da rotina do bebê",
    description: (
      <>
        Registre mamadas, sonecas, fraldas, medicamentos e observações em poucos toques, tudo em ordem cronológica no mesmo lugar. Isso evita depender da memória em dias corridos e ajuda você a <strong>enxergar a rotina do bebê com mais clareza</strong>.
      </>
    ),
    microbenefit: (
      <>
        Todas as informações <strong>em um só lugar</strong>
      </>
    ),
    image: card1Img,
    alt: "Diário completo da rotina do bebê no Maternar App"
  },
  {
    id: 2,
    title: "Resumo inteligente do dia",
    description: (
      <>
        Além de registrar, o app transforma a <strong>rotina em visão rápida</strong>: total de mamadas, horas de sono, trocas de fralda e eventos do dia em um só painel. Em segundos, você entende como foi o dia do bebê e percebe padrões que <strong>passariam despercebidos</strong>.
      </>
    ),
    microbenefit: (
      <>
        Menos confusão mental e <strong>mais clareza</strong>
      </>
    ),
    image: card2Img,
    alt: "Resumo inteligente do dia no Maternar App"
  },
  {
    id: 3,
    title: "Vacinas em dia, sem esforço",
    description: (
      <>
        <strong>O Maternar</strong> calcula automaticamente as datas com base na idade do bebê e organiza o calendário vacinal com status visuais fáceis de entender. Assim, você acompanha o que já foi feito, o que está chegando e o que precisa de atenção, <strong>sem depender só da caderneta</strong>.
      </>
    ),
    microbenefit: (
      <>
        Reduza o atraso vacinal a <strong>ZERO</strong>
      </>
    ),
    image: card3Img,
    alt: "Vacinas em dia no Maternar App"
  },
  {
    id: 4,
    title: "Controle inteligente de medicamentos",
    description: (
      <>
        Você cadastra o remédio, a dose, o intervalo e a duração do tratamento, e o app gera a sequência dos horários para você. Se houver atraso em uma dose, os próximos horários são <strong>recalculados automaticamente</strong> para manter a rotina do tratamento organizada.
      </>
    ),
    microbenefit: (
      <>
        Menos medo de <strong>esquecer ou errar horários</strong>
      </>
    ),
    image: card4Img,
    alt: "Controle inteligente de medicamentos no Maternar App"
  },
  {
    id: 5,
    title: "Dúvidas e histórico para o pediatra",
    description: (
      <>
        Sempre que surgir uma dúvida, sintoma ou comportamento diferente, você pode registrar na hora dentro do app e guardar tudo para a <strong>próxima consulta</strong>. Isso ajuda a chegar mais preparada, sem esquecer perguntas importantes e com <strong>histórico mais claro para o médico</strong>.
      </>
    ),
    microbenefit: (
      <>
        Consultas muito mais <strong>produtivas</strong>
      </>
    ),
    image: card5Img,
    alt: "Dúvidas e histórico para o pediatra no Maternar App"
  },
  {
    id: 6,
    title: "Acompanhamento do desenvolvimento",
    description: (
      <>
        O app organiza marcos do desenvolvimento por fase e categoria, ajudando você a visualizar o que o bebê já conquistou e o que é esperado para a idade. Em vez de viver na dúvida ou comparar com outras crianças, você acompanha a evolução de forma <strong>mais objetiva e tranquila</strong>.
      </>
    ),
    microbenefit: (
      <>
        Mais clareza sobre o <strong>desenvolvimento</strong>
      </>
    ),
    image: card6Img,
    alt: "Acompanhamento do desenvolvimento no Maternar App"
  },
  {
    id: 7,
    title: "Espaço de bem-estar materno",
    description: (
      <>
        O Maternar também olha para você com check-ins de humor, espaço para desabafo e apoio emocional dentro da rotina do app. Isso reforça o diferencial da marca: não é só um app de bebê, é uma ferramenta que reconhece a <strong>sobrecarga de quem cuida</strong>.
      </>
    ),
    microbenefit: (
      <>
        Um lugar <strong>só seu</strong> em meio à correria
      </>
    ),
    image: card7Img,
    alt: "Espaço de bem-estar materno no Maternar App"
  }
];

export default function Features() {
  return (
    <section id="beneficios" className="section fade-in">
      <div className="container">
        <div className="benefits-intro">
          <span className="eyebrow">App Completo</span>
          <h2 className="headline-lg balance-text">
            Tudo o que você{" "}
            <span className="highlight-underline">
              desbloqueia
              <svg className="highlight-underline-svg" viewBox="0 0 100 10" preserveAspectRatio="none" aria-hidden="true">
                <path d="M0,5 Q50,10 100,5" stroke="currentColor" strokeWidth="3" fill="transparent" strokeLinecap="round" />
              </svg>
            </span>{" "}
            no Maternar
          </h2>
          <p className="body-lg mx-auto max-w-2xl mt-4" style={{ color: 'var(--text-muted)' }}>
            Um aplicativo pensado para organizar a rotina do bebê, reduzir a sua carga mental e dar mais segurança nas decisões do dia a dia.
          </p>
        </div>

        <div className="benefits-list">
          {FEATURES_DATA.map((feature) => (
            <div key={feature.id} className="benefit-item">
              <div className="benefit-visual">
                <img src={feature.image} alt={feature.alt} loading="lazy" width={600} height={400} />
              </div>
              <div className="benefit-content">
                <h3 className="benefit-title">{feature.title}</h3>
                <p className="benefit-text">{feature.description}</p>
                <div className="benefit-pill">
                  <div className="benefit-pill-check">
                    <Check size={12} strokeWidth={4} />
                  </div>
                  <span className="benefit-pill-text">{feature.microbenefit}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
