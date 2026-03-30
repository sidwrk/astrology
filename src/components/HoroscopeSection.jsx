import { motion } from 'framer-motion'
import { horoscopeCards } from '../data/siteData'
import { SectionHeading } from './SectionHeading'

export function HoroscopeSection() {
  return (
    <section id="horoscope" className="section-shell py-16 sm:py-20">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeading
            eyebrow="Daily Horoscope"
            title="Daily guidance for love, career, and inner balance"
            description="Receive a calm, personalized snapshot of today&apos;s energies with insights designed to support better decisions, emotional clarity, and spiritual alignment."
          />

          <motion.div
            className="glass-panel rounded-[2rem] p-5 sm:p-6"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.32em] text-cyan-200">Sign of the Day</p>
                <h3 className="mt-2 font-display text-4xl text-white">Scorpio</h3>
              </div>
              <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">
                86% aligned
              </div>
            </div>
            <p className="mt-5 text-sm leading-7 text-slate-300">
              Today supports emotional clarity, strong boundaries, and focused action. Keep your schedule intentional and trust the slower path if it feels more honest.
            </p>
            <div className="mt-6 h-3 overflow-hidden rounded-full bg-white/5">
              <div className="h-full w-[86%] rounded-full bg-[linear-gradient(90deg,#b28dff_0%,#6ddcff_50%,#f2c46d_100%)]" />
            </div>
          </motion.div>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {horoscopeCards.map((card, index) => (
            <motion.div
              key={card.title}
              className="glass-panel rounded-[1.75rem] p-5"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.08 }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-white/10 to-white/0 text-xl text-gold">
                {index === 0 ? '♡' : index === 1 ? '✦' : '☾'}
              </div>
              <h3 className="mt-5 font-display text-3xl text-white">{card.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{card.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
