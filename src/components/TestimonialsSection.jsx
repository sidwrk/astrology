import { motion } from 'framer-motion'
import { testimonials } from '../data/siteData'
import { SectionHeading } from './SectionHeading'

export function TestimonialsSection() {
  return (
    <section className="section-shell py-16 sm:py-20">
      <SectionHeading
        eyebrow="Testimonials"
        title="Trusted by clients seeking thoughtful astrological guidance"
        description="Each experience reflects a careful, professional approach to astrology, combining clarity, empathy, and practical insight."
        align="center"
      />

      <div className="grid gap-4 lg:grid-cols-3">
        {testimonials.map((item, index) => (
          <motion.blockquote
            key={item.name}
            className="glass-panel rounded-[2rem] p-6"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.08 }}
          >
            <div className="text-4xl text-gold">{'\u201C'}</div>
            <p className="mt-4 text-sm leading-7 text-slate-300">{item.quote}</p>
            <footer className="mt-6 border-t border-white/10 pt-5">
              <div className="font-display text-2xl text-white">{item.name}</div>
              <div className="text-sm text-cyan-200">{item.role}</div>
            </footer>
          </motion.blockquote>
        ))}
      </div>
    </section>
  )
}
