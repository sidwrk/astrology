import { motion } from 'framer-motion'

export function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  const alignment = align === 'center' ? 'text-center items-center' : 'text-left items-start'

  return (
    <motion.div
      className={`mb-10 flex max-w-2xl flex-col ${alignment}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <span className="mb-3 inline-flex rounded-full border border-gold/30 bg-gold/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-gold">
        {eyebrow}
      </span>
      <h2 className="font-display text-4xl leading-none text-white sm:text-5xl">
        {title}
      </h2>
      <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
        {description}
      </p>
    </motion.div>
  )
}
