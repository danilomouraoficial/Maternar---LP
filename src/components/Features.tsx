import vacinaImg from '../assets/brand/mockup/vacina.webp';
import remediosImg from '../assets/brand/mockup/New/remedios.webp';
import consultasImg from '../assets/brand/mockup/New/consultas.webp';
import jornadaImg from '../assets/brand/mockup/New/jornada.webp';
import diarioImg from '../assets/brand/mockup/diario.webp';

export default function Features() {
  return (
    <section id="beneficios" className="section fade-in">
      <div className="container">
        <div className="benefits-intro">
          <span className="eyebrow">Organização com Leveza</span>
          <h2 className="headline-lg balance-text">Como trazemos paz mental para a sua rotina diária</h2>
        </div>

        <div className="benefits-list">
          {/* Benefício 1 */}
          <div className="benefit-item">
            <div className="benefit-content">
              <div className="benefit-icon-wrapper">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                  strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h3 className="benefit-title">Vacinas em dia, sem esforço</h3>
              <p className="body-md">
                O aplicativo calcula automaticamente todas as datas de imunização com base no calendário oficial do PNI do
                Ministério da Saúde. Você recebe um alerta detalhado na noite anterior, permitindo que você se planeje sem
                correria ou surpresas.
              </p>
              <div className="benefit-proof">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"
                  strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>Mães reduzem o atraso vacinal a zero</span>
              </div>
            </div>
            <div className="benefit-visual">
              <div className="benefit-visual-blueprint">
                <span className="blueprint-tag">MOCKUP_SCREEN // VACINAÇÃO_PNI</span>
                <span className="blueprint-line" />
              </div>
              <img src={vacinaImg} alt="Tela de Vacinas do Maternar App" loading="lazy" />
            </div>
          </div>

          {/* Benefício 2 */}
          <div className="benefit-item">
            <div className="benefit-content">
              <div className="benefit-icon-wrapper">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                  strokeLinecap="round" strokeLinejoin="round">
                  <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
                  <line x1="12" y1="9" x2="12" y2="13" />
                  <line x1="12" y1="17" x2="12.01" y2="17" />
                </svg>
              </div>
              <h3 className="benefit-title">Calculadora inteligente de remédios</h3>
              <p className="body-md">
                Chega de contas de cabeça no meio da noite. Informe o horário da primeira dose e o intervalo. O app gera a
                lista completa dos próximos horários. Caso você atrase a dose atual, basta registrar e toda a grade de
                horários seguinte é recalculada automaticamente.
              </p>
              <div className="benefit-proof">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"
                  strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>Evita riscos de superdosagem por esquecimento</span>
              </div>
            </div>
            <div className="benefit-visual">
              <div className="benefit-visual-blueprint">
                <span className="blueprint-tag">MOCKUP_SCREEN // CALCULADORA_DOSAGEM</span>
                <span className="blueprint-line" />
              </div>
              <img src={remediosImg} alt="Tela de Medicamentos e Diário do Maternar App" loading="lazy" />
            </div>
          </div>

          {/* Benefício 3 */}
          <div className="benefit-item">
            <div className="benefit-content">
              <div className="benefit-icon-wrapper">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                  strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </div>
              <h3 className="benefit-title">O campo 'Dúvidas para o Pediatra'</h3>
              <p className="body-md">
                Anotar dúvidas em papéis ou no bloco de notas espalhado do celular nunca dá certo. Sempre que notar um
                comportamento novo, uma cólica diferente ou um sintoma leve, registre no app. Na hora da consulta, você
                abre um relatório limpo e não esquece de nenhuma pergunta.
              </p>
              <div className="benefit-proof">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"
                  strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>Aproveitamento máximo do tempo da consulta médica</span>
              </div>
            </div>
            <div className="benefit-visual">
              <div className="benefit-visual-blueprint">
                <span className="blueprint-tag">MOCKUP_SCREEN // DÚVIDAS_PEDIATRA</span>
                <span className="blueprint-line" />
              </div>
              <img src={consultasImg} alt="Tela de Consultas do Maternar App" loading="lazy" />
            </div>
          </div>

          {/* Benefício 4 */}
          <div className="benefit-item">
            <div className="benefit-content">
              <div className="benefit-icon-wrapper">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                  strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3 className="benefit-title">Rede de apoio em sincronia total</h3>
              <p className="body-md">
                Chega de centralizar todas as informações na sua cabeça. Convide o pai, os avós ou a babá para o app.
                Quando eles registrarem o horário da mamada, uma soneca ou a troca de fralda, a informação atualiza
                instantaneamente no seu celular, sem precisar de mensagens de checagem.
              </p>
              <div className="benefit-proof">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"
                  strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>Reduz em 40% o excesso de mensagens diárias</span>
              </div>
            </div>
            <div className="benefit-visual">
              <div className="benefit-visual-blueprint">
                <span className="blueprint-tag">MOCKUP_SCREEN // REDE_APOIO</span>
                <span className="blueprint-line" />
              </div>
              <img src={jornadaImg} alt="Tela de Sincronização da Rede de Apoio do Maternar App" loading="lazy" />
            </div>
          </div>

          {/* Benefício 5 */}
          <div className="benefit-item">
            <div className="benefit-content">
              <div className="benefit-icon-wrapper">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                  strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              </div>
              <h3 className="benefit-title">Seu monitor de bem-estar</h3>
              <p className="body-md">
                O Maternar cuida de quem cuida. O aplicativo oferece um diário rápido de humor para identificar sinais de
                estresse acumulado ou depressão pós-parto, além de disponibilizar sessões de respiração guiada de 2
                minutos ideais para acalmar a mente nos picos de cansaço.
              </p>
              <div className="benefit-proof">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"
                  strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>O único app de bebê que também abraça a saúde física e mental da mãe.</span>
              </div>
            </div>
            <div className="benefit-visual">
              <div className="benefit-visual-blueprint">
                <span className="blueprint-tag">MOCKUP_SCREEN // BEM_ESTAR_MATERNO</span>
                <span className="blueprint-line" />
              </div>
              <img src={diarioImg} alt="Tela de Monitor de Bem-Estar e Humor do Maternar App" loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
