import { motion } from 'framer-motion'
import { floatingSymbols } from '../data/siteData'

const stars = Array.from({ length: 80 }, (_, index) => ({
  id: index,
  top: `${(index * 13) % 100}%`,
  left: `${(index * 17) % 100}%`,
  size: `${(index % 3) + 1}px`,
  duration: `${3 + (index % 5)}s`,
  delay: `${(index % 4) * 0.8}s`,
}))

export function CosmicBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-radialMystic" />
      <div className="mesh-grid absolute inset-0 opacity-20" />

      {stars.map((star) => (
        <span
          key={star.id}
          className="star"
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            '--duration': star.duration,
            '--delay': star.delay,
          }}
        />
      ))}

      {floatingSymbols.map((symbol, index) => (
        <motion.div
          key={`${symbol}-${index}`}
          className="absolute text-xl text-white/10 sm:text-3xl"
          initial={{
            x: `${(index * 11) % 92}vw`,
            y: `${(index * 9) % 88}vh`,
            opacity: 0.1,
          }}
          animate={{
            y: [`${(index * 9) % 88}vh`, `${((index * 9) % 88) - 4}vh`, `${(index * 9) % 88}vh`],
            rotate: [0, 12, -12, 0],
          }}
          transition={{
            duration: 8 + index,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          {symbol}
        </motion.div>
      ))}

      <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-300/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-purple-500/10 blur-3xl" />
    </div>
  )
}
