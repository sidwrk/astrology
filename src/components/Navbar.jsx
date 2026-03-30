import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { navItems } from '../data/siteData'

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <motion.header
      className="sticky top-3 z-50 section-shell"
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <div className="glass-panel mt-3 rounded-[1.75rem] px-3 py-3 sm:rounded-full sm:px-4">
        <div className="flex items-center justify-between gap-4">
          <a href="#home" className="flex min-w-0 items-center gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold/30 bg-gradient-to-br from-gold/20 via-purple-400/20 to-cyan-300/20 text-lg text-gold shadow-glow">
              {'\u2726'}
            </div>
            <div className="min-w-0">
              <div className="truncate font-display text-xl leading-none text-white sm:text-2xl">
                Mystic Orbit
              </div>
              <div className="text-[9px] uppercase tracking-[0.28em] text-slate-400 sm:text-[10px] sm:tracking-[0.35em]">
                Cosmic Guidance
              </div>
            </div>
          </a>

          <nav className="hidden items-center gap-6 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-slate-200 transition hover:text-gold"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden rounded-full bg-gradient-to-r from-gold via-amber-200 to-gold px-5 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-gold/20 sm:inline-flex"
            >
              Book Reading
            </a>
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white lg:hidden"
              onClick={() => setOpen((value) => !value)}
              aria-label="Toggle navigation menu"
            >
              {open ? '\u2715' : '\u2630'}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.nav
              className="mt-4 flex flex-col gap-2 rounded-3xl border border-white/10 bg-slate-950/60 p-3 lg:hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
            >
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-2xl px-4 py-3 text-sm text-slate-200 transition hover:bg-white/5 hover:text-gold"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}
