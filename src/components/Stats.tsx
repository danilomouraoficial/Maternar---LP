import { motion } from 'framer-motion';

export default function Stats() {
  const statsList = [
    {
      num: 'PNI',
      label: 'Calendário oficial integrado e atualizado'
    },
    {
      num: '5 min',
      label: 'Alerta antes de cada dose de remédio'
    },
    {
      num: '3',
      label: 'Membros na rede de apoio sincronizada'
    }
  ];

  return (
    <section className="py-12 bg-[#F8F9F7] border-t border-b border-slate-200/50">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid gap-6 md:grid-cols-3">
          {statsList.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-emerald-50/50 border border-slate-100 rounded-2xl p-6 text-center shadow-sm space-y-1"
            >
              <div className="text-3xl font-bold font-heading text-[#0F6E56]">
                {stat.num}
              </div>
              <div className="text-xs font-semibold text-slate-500 leading-relaxed max-w-[200px] mx-auto">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
