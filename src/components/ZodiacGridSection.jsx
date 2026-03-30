import { motion } from 'framer-motion'
import { zodiacSigns } from '../data/siteData'
import { SectionHeading } from './SectionHeading'

export function ZodiacGridSection() {
  return (
    <section id="zodiac" className="section-shell py-16 sm:py-20">
      <SectionHeading
        eyebrow="Zodiac Spectrum"
        title="Explore the energies of all 12 signs"
        description="Each card is tuned for readability on smaller screens first, then expands into a premium grid experience on larger displays."
      />

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {zodiacSigns.map((sign, index) => (
          <motion.article
            key={sign.name}
            className="glass-panel group relative overflow-hidden rounded-[1.75rem] p-5"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: index * 0.04 }}
            whileHover={{ y: -8 }}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${sign.accent} opacity-80 transition duration-500 group-hover:opacity-100`} />
            <div className="absolute -right-3 top-3 text-6xl text-white/10">{sign.glyph}</div>
            <div className="relative">
              <div className="inline-flex rounded-full border border-white/10 bg-slate-950/40 px-3 py-1 text-xs uppercase tracking-[0.3em] text-slate-300">
                {sign.date}
              </div>
              <h3 className="mt-5 font-display text-3xl text-white">{sign.name}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-100/85">{sign.insight}</p>
              <button
                type="button"
                className="mt-6 inline-flex rounded-full border border-gold/30 bg-gold/10 px-4 py-2 text-sm font-medium text-gold"
              >
                View Reading
              </button>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
