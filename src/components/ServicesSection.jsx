import { motion } from 'framer-motion'
import { services } from '../data/siteData'
import { SectionHeading } from './SectionHeading'

export function ServicesSection() {
  return (
    <section id="services" className="section-shell py-16 sm:py-20">
      <SectionHeading
        eyebrow="Services"
        title="Astrology offerings designed as conversion-ready product cards"
        description="A modern services section with strong hierarchy, glass textures, and enough contrast to keep it fast and readable across device sizes."
      />

      <div className="grid gap-4 lg:grid-cols-2">
        {services.map((service, index) => (
          <motion.article
            key={service.title}
            className="glass-panel group relative overflow-hidden rounded-[2rem] p-6"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.08 }}
            whileHover={{ y: -8 }}
          >
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-gold/10 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
            <div className="flex items-start justify-between gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-400/25 to-cyan-300/20 text-2xl text-gold">
                {index + 1}
              </div>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.28em] text-slate-300">
                Premium UI
              </span>
            </div>
            <h3 className="mt-6 font-display text-4xl text-white">{service.title}</h3>
            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300">{service.description}</p>
            <button
              type="button"
              className="mt-6 inline-flex rounded-full border border-gold/30 bg-gold/10 px-4 py-2 text-sm font-medium text-gold"
            >
              Learn More
            </button>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
