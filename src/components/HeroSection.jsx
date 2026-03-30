import { Canvas } from '@react-three/fiber'
import { motion } from 'framer-motion'
import { stats } from '../data/siteData'
import { ZodiacWheelScene } from './scene/ZodiacWheelScene'

export function HeroSection() {
  return (
    <section id="home" className="section-shell relative pt-4 sm:pt-10">
      <div className="grid items-center gap-8 pb-14 pt-6 sm:gap-10 sm:pb-16 sm:pt-8 lg:grid-cols-[1.05fr_0.95fr] lg:pb-24 lg:pt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative z-10"
        >
          <div className="mb-4 inline-flex max-w-full rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-cyan-200 sm:mb-5 sm:px-4 sm:text-xs sm:tracking-[0.35em]">
            Modern Cosmic Experience
          </div>
          <h1 className="max-w-[11ch] font-display text-[2.9rem] leading-[0.92] text-white sm:text-6xl lg:text-7xl">
            Decode your
            <span className="gold-gradient block"> celestial blueprint</span>
          </h1>
          <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300 sm:mt-5 sm:text-base">
            A fast, immersive astrology frontend crafted with motion, 3D depth, and a mobile-first layout for horoscope discovery, kundli insights, and spiritual services.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row">
            <a
              href="#kundli"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-gradient-to-r from-gold via-amber-200 to-gold px-6 py-3 text-center text-sm font-semibold text-slate-950 shadow-lg shadow-gold/20"
            >
              Generate Birth Chart
            </a>
            <a
              href="#services"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-center text-sm font-semibold text-white"
            >
              Explore Services
            </a>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {stats.map((item, index) => (
              <motion.div
                key={item.label}
                className="glass-panel rounded-3xl p-4"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + index * 0.1, duration: 0.6 }}
              >
                <div className="font-display text-3xl text-gold">{item.value}</div>
                <div className="mt-2 text-sm text-slate-300">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="relative"
        >
          <div className="glass-panel relative mx-auto h-[360px] overflow-hidden rounded-[1.75rem] border border-white/10 shadow-mystic sm:h-[520px] sm:rounded-[2rem] lg:h-[620px]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(242,196,109,0.1),transparent_30%),radial-gradient(circle_at_bottom,rgba(109,220,255,0.16),transparent_30%)]" />
            <Canvas camera={{ position: [0, 0, 8], fov: 45 }} dpr={[1, 1.8]}>
              <ZodiacWheelScene />
            </Canvas>

            <div className="absolute left-3 top-3 rounded-2xl border border-white/10 bg-slate-950/50 px-3 py-2.5 backdrop-blur-md sm:left-4 sm:top-4 sm:px-4 sm:py-3">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Moon Phase</p>
              <p className="font-display text-xl text-white sm:text-2xl">Waxing Gibbous</p>
            </div>

            <div className="absolute bottom-3 left-3 right-3 max-w-none rounded-3xl border border-white/10 bg-slate-950/55 p-3 backdrop-blur-md sm:bottom-4 sm:left-auto sm:right-4 sm:max-w-[220px] sm:p-4">
              <p className="text-xs uppercase tracking-[0.3em] text-cyan-200">Today&apos;s Energy</p>
              <p className="mt-2 text-xs leading-5 text-slate-200 sm:text-sm sm:leading-6">
                Trust instinct, move slowly, and choose aligned conversations over noisy momentum.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
