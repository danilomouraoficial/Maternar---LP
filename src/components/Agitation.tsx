import { motion } from 'framer-motion';
import { XCircle, CheckCircle, MessageCircle, Search, Baby, ClipboardList } from 'lucide-react';

export default function Agitation() {
  return (
    <section className="py-24 lg:py-32 bg-white relative">
      <div className="mx-auto max-w-5xl px-6 space-y-16">
        
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          {/* Coluna da Esquerda: Copy Agitação */}
          <div className="space-y-6 text-left">
            <div className="inline-flex items-center gap-2 rounded-full bg-red-50 border border-red-100 px-3 py-1 text-xs font-bold text-red-600 uppercase tracking-wider">
              Informação Insegura
            </div>
            <h2 className="text-3xl font-bold leading-tight text-[#093C31] font-heading md:text-4xl tracking-[-0.01em] balance-text">
              O perigo de pesquisar sintomas na{"\u00a0"}madrugada
            </h2>
            <p className="text-base sm:text-lg text-slate-500 font-medium leading-relaxed">
              Quando seu bebê chora sem parar ou a febre sobe, a última coisa que você precisa é da ansiedade que o Google causa. Cadernos de papel se perdem, grupos de WhatsApp estão cheios de palpites conflitantes e planilhas no Excel são frias e difíceis de preencher no escuro com o bebê no colo.
            </p>
            <p className="text-base sm:text-lg text-slate-500 font-medium leading-relaxed">
              Você merece respostas validadas de forma rápida, segura e de fácil visualização na palma da sua mão.
            </p>
          </div>

          {/* Coluna da Direita: Componente Visual Comparativo */}
          <div className="space-y-6">
            
            {/* O Caos */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="p-6 rounded-[28px] border border-red-100 bg-[#FFFDFD] shadow-sm relative overflow-hidden text-left"
            >
              <div className="flex items-center gap-2 text-red-500 mb-3">
                <XCircle size={20} strokeWidth={2.5} />
                <span className="text-xs font-black uppercase tracking-widest">O Caos (Google e WhatsApp)</span>
              </div>
              <div className="space-y-3">
                <div className="p-3.5 bg-white rounded-2xl shadow-sm text-xs font-semibold text-slate-600 text-left border border-slate-100 flex gap-2 items-center">
                  <MessageCircle size={16} className="text-slate-400 shrink-0" />
                  <span><strong>Grupo de Apoio:</strong> &ldquo;Espreme uma gotinha de limão na mamadeira que alivia a cólica...&rdquo;</span>
                </div>
                <div className="p-3.5 bg-white rounded-2xl shadow-sm text-xs font-semibold text-slate-600 text-left border border-slate-100 flex gap-2 items-center">
                  <Search size={16} className="text-slate-400 shrink-0" />
                  <span><strong>Busca no Google:</strong> &ldquo;Febre e choro constante pode ser sinal de infecção grave. Procure o hospital.&rdquo;</span>
                </div>
                <p className="text-[11px] text-red-600/70 font-bold leading-relaxed text-left pl-1">
                  Resultado: Pânico mental, insegurança e idas desnecessárias ao pronto-socorro.
                </p>
              </div>
            </motion.div>
 
            {/* A Paz */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="p-6 rounded-[28px] border border-emerald-100 bg-[#F7FBF9] shadow-md relative overflow-hidden transition-all duration-300 hover:scale-[1.01] text-left"
            >
              <div className="flex items-center gap-2 text-emerald-600 mb-3">
                <CheckCircle size={20} strokeWidth={2.5} />
                <span className="text-xs font-black uppercase tracking-widest text-[#093C31]">A Paz (Maternar)</span>
              </div>
              <div className="space-y-3">
                <div className="p-3.5 bg-white rounded-2xl shadow-sm text-xs font-semibold text-slate-600 text-left border border-slate-100 flex gap-2 items-center">
                  <Baby size={16} className="text-[#0F6E56] shrink-0" />
                  <span><strong>Maternar:</strong> &ldquo;Oliver está com 37.8°C. É considerado estado febril leve. Mantenha as roupas leves e monitore de forma contínua.&rdquo;</span>
                </div>
                <div className="p-3.5 bg-white rounded-2xl shadow-sm text-xs font-semibold text-slate-600 text-left border border-slate-100 flex gap-2 items-center">
                  <ClipboardList size={16} className="text-[#0F6E56] shrink-0" />
                  <span><strong>SOS Dosagens:</strong> Gotas calculadas exatamente para o peso atual dele (8kg) de forma rápida e segura.</span>
                </div>
                <p className="text-[11px] text-emerald-800/80 font-bold leading-relaxed text-left pl-1">
                  Resultado: Decisões calmas baseadas em ciência, com toda a rotina registrada e organizada.
                </p>
              </div>
            </motion.div>
            
          </div>
        </div>

      </div>
    </section>
  );
}
