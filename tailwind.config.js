/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body:    ['DM Sans', 'sans-serif'],
      },
      colors: {
        bg:      '#09090b',
        surface: '#111113',
        card:    '#18181c',
        border:  '#27272e',
        amber:   '#f5a623',
        coral:   '#ff6b6b',
        sky:     '#4fc3f7',
        mint:    '#69f0ae',
        lavender:'#ce93d8',
        muted:   '#71717a',
      },
      animation: {
        'fade-up':   'fadeUp 0.5s ease both',
        'blob-slow': 'drift 14s ease-in-out infinite alternate',
        'bob':       'bob 2.5s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(28px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        drift: {
          from: { transform: 'translate(0,0) scale(1)' },
          to:   { transform: 'translate(40px,30px) scale(1.12)' },
        },
        bob: {
          '0%,100%': { transform: 'translateX(-50%) translateY(0)' },
          '50%':     { transform: 'translateX(-50%) translateY(8px)' },
        },
      },
    },
  },
  plugins: [],
}
