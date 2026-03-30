/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        night: '#070816',
        void: '#0f1233',
        cosmic: '#151a4b',
        gold: '#f2c46d',
        lavender: '#b28dff',
        cyan: '#6ddcff',
      },
      fontFamily: {
        sans: ['"Poppins"', 'system-ui', 'sans-serif'],
        display: ['"Cormorant Garamond"', 'serif'],
      },
      boxShadow: {
        glow: '0 0 30px rgba(109, 220, 255, 0.18)',
        mystic: '0 20px 60px rgba(7, 8, 22, 0.55)',
      },
      backgroundImage: {
        radialMystic:
          'radial-gradient(circle at top, rgba(109,220,255,0.2), transparent 38%), radial-gradient(circle at bottom, rgba(178,141,255,0.14), transparent 32%)',
      },
      animation: {
        shimmer: 'shimmer 3s linear infinite',
        floatSlow: 'floatSlow 9s ease-in-out infinite',
        pulseGlow: 'pulseGlow 4s ease-in-out infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0)' },
          '50%': { transform: 'translate3d(0, -12px, 0)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.55', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.08)' },
        },
      },
    },
  },
  plugins: [],
}
