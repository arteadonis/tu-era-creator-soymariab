/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          pink: '#FF2E93',
          'pink-hover': '#E01A7E',
          'pink-light': '#FF70B8',
          'pink-pale': '#FFF0F7',
          yellow: '#FFF385',
          'yellow-light': '#FFF9D2',
          'yellow-pale': '#FFFEF2',
          gold: '#FBBF24',
          black: '#0F0F12',
          dark: '#16161B',
          'card-dark': '#1F1F27',
          cream: '#FAF8F5',
          muted: '#8E8E93',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        display: ['"League Spartan"', '"Plus Jakarta Sans"', 'sans-serif'],
        hand: ['Caveat', 'cursive'],
        editorial: ['"Playfair Display"', 'serif'],
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-8px) rotate(3deg)' },
        },
        sparkle: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(0.8)' },
          '50%': { opacity: '1', transform: 'scale(1.2)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 15px rgba(255, 46, 147, 0.4)' },
          '50%': { boxShadow: '0 0 35px rgba(255, 46, 147, 0.85)' },
        }
      },
      animation: {
        marquee: 'marquee 22s linear infinite',
        'marquee-reverse': 'marquee-reverse 22s linear infinite',
        float: 'float 4s ease-in-out infinite',
        sparkle: 'sparkle 2.5s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2.5s infinite',
      }
    },
  },
  plugins: [],
}
