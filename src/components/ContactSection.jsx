import { motion } from 'framer-motion'
import { SectionHeading } from './SectionHeading'

export function ContactSection() {
  return (
    <section id="contact" className="section-shell py-16 sm:py-20">
      <div className="glass-panel overflow-hidden rounded-[2rem]">
        <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="border-b border-white/10 p-6 sm:p-8 lg:border-b-0 lg:border-r">
            <SectionHeading
              eyebrow="Contact"
              title="Invite visitors into a modern consultation flow"
              description="The contact area pairs trust-building copy with a simple responsive form, ready for backend integration later."
            />

            <div className="space-y-4">
              <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                <p className="text-xs uppercase tracking-[0.32em] text-slate-400">Consultation Window</p>
                <p className="mt-3 font-display text-3xl text-white">Mon - Sat, 10 AM to 7 PM</p>
              </div>
              <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                <p className="text-xs uppercase tracking-[0.32em] text-slate-400">Support Channels</p>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  hello@mysticorbit.com
                  <br />
                  +91 98765 43210
                </p>
              </div>
            </div>
          </div>

          <motion.form
            className="grid gap-4 p-6 sm:p-8"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <label className="block">
              <span className="mb-2 block text-sm text-slate-300">Name</span>
              <input className="field-base" type="text" placeholder="Your name" />
            </label>
            <label className="block">
              <span className="mb-2 block text-sm text-slate-300">Email</span>
              <input className="field-base" type="email" placeholder="Your email" />
            </label>
            <label className="block">
              <span className="mb-2 block text-sm text-slate-300">Service</span>
              <select className="field-base" defaultValue="Personal Horoscope Reading">
                <option>Personal Horoscope Reading</option>
                <option>Kundli Matching</option>
                <option>Career Guidance</option>
                <option>Gemstone Suggestions</option>
              </select>
            </label>
            <label className="block">
              <span className="mb-2 block text-sm text-slate-300">Message</span>
              <textarea className="field-base min-h-32 resize-none" placeholder="Tell us what kind of guidance you are seeking." />
            </label>
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-gold via-amber-200 to-gold px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-gold/20"
            >
              Send Inquiry
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
