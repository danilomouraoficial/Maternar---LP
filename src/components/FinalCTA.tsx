import { useCopyVariant } from '../hooks/useCopyVariant';

export default function FinalCTA() {
  const variant = useCopyVariant();

  return (
    <section className="section closing fade-in">
      <div className="container closing-content">
        <div className="closing-text-wrapper">
          <span className="eyebrow">{variant.finalCta.eyebrow}</span>
          <h2 
            className="headline-lg balance-text"
            dangerouslySetInnerHTML={{ __html: variant.finalCta.headline }}
          />
          <p className="body-lg balance-text">
            {variant.finalCta.subheadline}
          </p>
        </div>

        <a href="#planos" className="btn btn--dark">{variant.finalCta.cta}</a>
      </div>
    </section>
  );
}
