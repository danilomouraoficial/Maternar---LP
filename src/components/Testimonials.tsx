import { useState, useEffect } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel';
import dep1 from '../assets/depoimentos/dep-01.png';
import dep2 from '../assets/depoimentos/dep-02.png';
import dep3 from '../assets/depoimentos/dep-03.png';

const TESTIMONIAL_IMAGES = [
  { id: 1, src: dep1 },
  { id: 2, src: dep2 },
  { id: 3, src: dep3 },
  { id: 4, src: dep1 },
  { id: 5, src: dep2 },
  { id: 6, src: dep3 },
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
          <h2 className="headline-lg balance-text">Histórias de mães que reconquistaram o controle da rotina</h2>
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
            {TESTIMONIAL_IMAGES.map((item) => (
              <CarouselItem key={item.id} className="basis-full md:basis-1/2 lg:basis-1/3 pl-8">
                <div className="testi-img-card rounded-2xl overflow-hidden shadow-sm hover:shadow-md border border-[#0B2823]/8 transition-all duration-300 bg-white">
                  <img src={item.src} alt={`Depoimento de cliente Maternar ${item.id}`} className="w-full h-auto block" loading="lazy" />
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
