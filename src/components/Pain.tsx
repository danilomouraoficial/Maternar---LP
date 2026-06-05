export default function Pain() {
  return (
    <section className="section section--sand pain-section fade-in">
      <div className="container">
        <div className="pain-intro">
          <span className="eyebrow eyebrow--green">A carga invisível</span>
          <h2 className="headline-lg balance-text">O peso real que ninguém te contou sobre o pós-parto</h2>
          <p className="body-lg">
            O esgotamento físico do puerpério não vem apenas das noites mal dormidas. Ele vem do esforço silencioso de ter
            que lembrar de tudo, o tempo todo.
          </p>
        </div>

        <div className="pain-editorial-flow">
          {/* Cenário 1 */}
          <div className="pain-editorial-card pain-editorial-card--1">
            <span className="pain-number-watermark">01</span>
            <div className="pain-card-header-accent" />
            <h3 className="pain-title">A dose das 3h da manhã</h3>
            <p className="pain-text">
              O antibiótico é de 8 em 8 horas. A primeira dose foi dada às 19h15. Com o bebê chorando e a mente exausta,
              você tenta fazer contas de cabeça no escuro, com medo de errar a dosagem.
            </p>
          </div>

          {/* Cenário 2 */}
          <div className="pain-editorial-card pain-editorial-card--2">
            <span className="pain-number-watermark">02</span>
            <div className="pain-card-header-accent" />
            <h3 className="pain-title">A caderneta amassada</h3>
            <p className="pain-text">
              A pediatra pergunta se o bebê já tomou a segunda dose da vacina meningocócica. Você vasculha um caderninho
              de papel amassado no fundo da bolsa, com vergonha de não saber responder com certeza.
            </p>
          </div>

          {/* Cenário 3 */}
          <div className="pain-editorial-card pain-editorial-card--3">
            <span className="pain-number-watermark">03</span>
            <div className="pain-card-header-accent" />
            <h3 className="pain-title">A ausência do seu nome</h3>
            <p className="pain-text">
              Todo mundo te liga para saber como o bebê está crescendo, se ele está ganhando peso ou dormindo. Quase
              ninguém te pergunta como você está se sentindo. A sua própria saúde física e mental fica em segundo plano.
            </p>
          </div>
        </div>

        <div className="pain-resolution-editorial">
          <p className="pain-resolution-text balance-text">
            "Cuidar de um filho não deveria exigir que você triplicasse a sua capacidade de memória. O Maternar foi feito
            para ser o seu HD{"\u00a0"}externo."
          </p>
        </div>
      </div>
    </section>
  );
}

