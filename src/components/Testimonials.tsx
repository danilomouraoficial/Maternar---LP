import { useState, useEffect } from 'react';
import { Star, Check, Quote } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel';

interface Testimonial {
  id: number;
  impact: string;
  quote: string;
  author: string;
  details: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    impact: "Acabou o pânico do antibiótico",
    quote: "O alarme de medicação recalcular todos os próximos horários sozinho quando eu atrasei a dose da madrugada me tirou uma culpa enorme. Recomendo para todas as mães exaustas.",
    author: "Mariana L.",
    details: "Mãe do Leo (6 meses) · Porto Alegre/RS",
    avatar: "ML"
  },
  {
    id: 2,
    impact: "Sincronia real entre nós dois",
    quote: "Meu marido e eu agora compartilhamos a rotina sem precisar de dezenas de mensagens perguntando se a nossa filha já mamou ou que horas ela dormiu. Divide de verdade a carga de cuidado.",
    author: "Gabriela F.",
    details: "Mãe da Alice (1 ano) · Rio de Janeiro/RJ",
    avatar: "GF"
  },
  {
    id: 3,
    impact: "Aproveito 100% as consultas",
    quote: "Sempre chegava na pediatra com a cabeça em branco. Agora, anoto as dúvidas que surgem ao longo das semanas direto na aba de consultas e levo o app aberto. Mudou a qualidade do atendimento.",
    author: "Beatriz M.",
    details: "Mãe do Theo (2 meses) · Campinas/SP",
    avatar: "BM"
  },
  {
    id: 4,
    impact: "Janelas de sono previsíveis",
    quote: "Com o registro de sonecas e mamadas, o app calcula a janela de sono ideal do meu bebê. Ele avisa o momento exato de colocar para dormir, evitando crises de choro por exaustão.",
    author: "Paula R.",
    details: "Mãe da Clara (3 meses) · Belo Horizonte/MG",
    avatar: "PR"
  },
  {
    id: 5,
    impact: "Calculadora de dose é incrível",
    quote: "Pedro teve febre às 3h da manhã e eu não conseguia fazer contas com o sono. O Maternar me deu a dose exata do antitérmico com base no peso dele. Me trouxe muita segurança.",
    author: "Amanda S.",
    details: "Mãe do Pedro (9 meses) · Curitiba/PR",
    avatar: "AS"
  },
  {
    id: 6,
    impact: "Crescimento sob controle",
    quote: "Acompanhar os saltos de desenvolvimento e a curva de crescimento dele ficou muito fácil. O app me ensina o que esperar de cada fase e traz dicas de estímulos práticos.",
    author: "Camila V.",
    details: "Mãe do Benício (4 meses) · São Paulo/SP",
    avatar: "CV"
  },
  {
    id: 7,
    impact: "Rede de apoio ativa",
    quote: "Minha mãe cuida da Sofia à tarde. Quando ela registra a troca de fraldas ou mamada, atualiza na hora no meu celular no trabalho. Sinto-me tranquila e no controle da rotina dela.",
    author: "Letícia K.",
    details: "Mãe da Sofia (18 meses) · Salvador/BA",
    avatar: "LK"
  }
];

export default function Testimonials() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;

    const updateState = () => {
      setCount(api.scrollSnapList().length);
      setCurrent(api.selectedScrollSnap());
    };

    updateState();

    api.on("select", updateState);
    api.on("reInit", updateState);

    return () => {
      api.off("select", updateState);
      api.off("reInit", updateState);
    };
  }, [api]);

  return (
    <section className="section section--sand fade-in">
      <div className="container">
        <div className="faq-intro">
          <span className="eyebrow eyebrow--green">Maternidade Real</span>
          <h2 className="headline-lg balance-text">Histórias de mães que reconquistaram o controle da{"\u00a0"}rotina</h2>
        </div>

        <Carousel 
          setApi={setApi} 
          className="testimonials-carousel-container w-full"
          opts={{
            align: "start",
            loop: false,
          }}
        >
          {/* Navegação - Seta Esquerda */}
          <CarouselPrevious className="carousel-nav-btn carousel-nav-btn--prev" />

          {/* Viewport & Content do Carrossel */}
          <CarouselContent className="-ml-8">
            {testimonials.map((testi) => (
              <CarouselItem key={testi.id} className="basis-full md:basis-1/2 lg:basis-1/3 pl-8">
                <div className="testi-card h-full flex flex-col justify-between relative overflow-hidden">
                  {/* Watermark Quote Icon */}
                  <Quote 
                    size={56} 
                    className="absolute right-6 top-6 pointer-events-none transform scale-x-[-1]" 
                    style={{ color: 'rgba(20, 74, 65, 0.035)' }} 
                  />

                  <div className="testi-content">
                    {/* Header: Stars & Verified Badge */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="flex gap-0.5 text-amber-500">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
                        ))}
                      </div>
                      <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-50 text-[10px] font-bold text-emerald-700 border border-emerald-600/10">
                        <Check size={10} className="stroke-[3]" />
                        <span>Mãe Verificada</span>
                      </div>
                    </div>
                    
                    <div className="testi-quote">
                      <span className="testi-impact">"{testi.impact}"</span>
                      {testi.quote}
                    </div>
                  </div>

                  <div className="testi-profile">
                    <div className="testi-avatar">{testi.avatar}</div>
                    <div className="testi-info">
                      <h4>{testi.author}</h4>
                      <p>{testi.details}</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Navegação - Seta Direita */}
          <CarouselNext className="carousel-nav-btn carousel-nav-btn--next" />

          {/* Dots Indicadores */}
          <div className="carousel-dots">
            {Array.from({ length: count }).map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`carousel-dot ${current === index ? 'carousel-dot--active' : ''}`}
                aria-label={`Ir para depoimento ${index + 1}`}
              />
            ))}
          </div>
        </Carousel>
      </div>
    </section>
  );
}
