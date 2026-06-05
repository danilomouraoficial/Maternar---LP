import { motion } from 'framer-motion';

export default function ValueTable() {
  const rows = [
    { name: 'App de controle de vacinas (pago)', price: 'R$ 59,90' },
    { name: 'App de controle de remédios com alertas', price: 'R$ 49,90' },
    { name: 'App de diário do bebê premium', price: 'R$ 79,90' },
    { name: 'App de monitoramento emocional / mindfulness', price: 'R$ 69,90' },
    { name: 'Caderneta de saúde impressa com histórico', price: 'R$ 35,00' }
  ];

  return (
    <section className="py-24 bg-[#F8F9F7] border-t border-b border-slate-200/50 text-left">
      <div className="mx-auto max-w-3xl px-6 space-y-10">
        
        {/* Cabeçalho */}
        <div className="space-y-3">
          <span className="text-xs font-black uppercase text-secondary tracking-widest block">Tabela de Custo Comparativa</span>
          <h2 className="text-2xl sm:text-3xl font-bold font-heading text-slate-800 tracking-tight">
            O que você deixaria de pagar pra ter tudo isso separado
          </h2>
        </div>

        {/* Tabela de Valor Estilizada */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border border-slate-200 bg-white rounded-3xl overflow-hidden shadow-sm"
        >
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50/50">
                  <th className="text-xs font-bold text-slate-400 uppercase tracking-widest p-5 text-left">
                    Se você fosse montar isso sozinha
                  </th>
                  <th className="text-xs font-bold text-slate-400 uppercase tracking-widest p-5 text-right">
                    Custo estimado / ano
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, index) => (
                  <tr key={index} className="border-b border-slate-100 last:border-0 hover:bg-slate-50/30 transition-colors">
                    <td className="text-sm font-semibold text-slate-600 p-5">
                      {row.name}
                    </td>
                    <td className="text-sm font-bold text-slate-500 p-5 text-right whitespace-nowrap">
                      {row.price}
                    </td>
                  </tr>
                ))}
                
                {/* Total Separado */}
                <tr className="border-t-2 border-slate-100 bg-rose-50/30">
                  <td className="text-sm font-bold text-rose-900 p-5">
                    Total se você comprar separado
                  </td>
                  <td className="text-sm font-bold text-rose-600 p-5 text-right line-through whitespace-nowrap">
                    R$ 294,60 / ano
                  </td>
                </tr>

                {/* Maternar Tudo em um */}
                <tr className="bg-[#E1F5EE]/40 border-t border-[#5DCAA5]">
                  <td className="text-sm font-black text-[#085041] p-5">
                    Maternar — tudo em um app, para sempre
                  </td>
                  <td className="text-base font-black text-[#0F6E56] p-5 text-right whitespace-nowrap">
                    R$ 87,90 único
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
