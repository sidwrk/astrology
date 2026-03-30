import { motion } from 'framer-motion'
import { SectionHeading } from './SectionHeading'

export function KundliFormSection() {
  return (
    <section id="kundli" className="section-shell py-16 sm:py-20">
      <div className="glass-panel overflow-hidden rounded-[2rem]">
        <div className="grid gap-0 lg:grid-cols-[0.88fr_1.12fr]">
          <div className="border-b border-white/10 p-6 sm:p-8 lg:border-b-0 lg:border-r">
            <SectionHeading
              eyebrow="Kundli Form"
              title="Request your birth chart consultation"
              description="Share your birth details to receive a professionally prepared kundli reading focused on life direction, relationships, career, and personal growth."
            />

            <div className="space-y-4 rounded-[1.75rem] border border-white/10 bg-white/5 p-5">
              <div className="flex items-center justify-between text-sm text-slate-300">
                <span>Birth Chart Readiness</span>
                <span className="text-gold">75%</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-3/4 rounded-full bg-[linear-gradient(90deg,#6ddcff,#b28dff,#f2c46d)]" />
              </div>
              <div className="grid grid-cols-3 gap-3 text-center text-xs text-slate-300">
                <div className="rounded-2xl border border-white/10 bg-slate-950/50 px-3 py-4">
                  Date
                </div>
                <div className="rounded-2xl border border-white/10 bg-slate-950/50 px-3 py-4">
                  Time
                </div>
                <div className="rounded-2xl border border-white/10 bg-slate-950/50 px-3 py-4">
                  Place
                </div>
              </div>
            </div>
          </div>

          <motion.form
            className="grid gap-4 p-6 sm:grid-cols-2 sm:p-8"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <label className="block sm:col-span-1">
              <span className="mb-2 block text-sm text-slate-300">Full Name</span>
              <input className="field-base" type="text" placeholder="Enter your name" />
            </label>
            <label className="block sm:col-span-1">
              <span className="mb-2 block text-sm text-slate-300">Email</span>
              <input className="field-base" type="email" placeholder="you@example.com" />
            </label>
            <label className="block">
              <span className="mb-2 block text-sm text-slate-300">Birth Date</span>
              <input className="field-base" type="date" />
            </label>
            <label className="block">
              <span className="mb-2 block text-sm text-slate-300">Birth Time</span>
              <input className="field-base" type="time" />
            </label>
            <label className="block sm:col-span-2">
              <span className="mb-2 block text-sm text-slate-300">Birth Place</span>
              <input className="field-base" type="text" placeholder="City, State, Country" />
            </label>
            <label className="block">
              <span className="mb-2 block text-sm text-slate-300">Chart Type</span>
              <select className="field-base" defaultValue="Vedic Kundli">
                <option>Vedic Kundli</option>
                <option>North Indian Chart</option>
                <option>South Indian Chart</option>
                <option>Compatibility Chart</option>
              </select>
            </label>
            <label className="block">
              <span className="mb-2 block text-sm text-slate-300">Focus Area</span>
              <select className="field-base" defaultValue="Career & Relationships">
                <option>Career & Relationships</option>
                <option>Marriage</option>
                <option>Health</option>
                <option>Finance</option>
              </select>
            </label>
            <label className="block sm:col-span-2">
              <span className="mb-2 block text-sm text-slate-300">Notes</span>
              <textarea className="field-base min-h-32 resize-none" placeholder="Share any specific question you want included in the reading." />
            </label>
            <div className="sm:col-span-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm leading-6 text-slate-400">
                Your details help us prepare a more accurate and meaningful consultation experience.
              </p>
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-gold via-amber-200 to-gold px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-gold/20"
              >
                Request Consultation
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
