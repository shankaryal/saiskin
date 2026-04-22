/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: "#c9a84c",
        "gold-light": "#e0c97a",
        "gold-dark": "#a8832a",
        dark: "#0d0d0d",
        "dark-soft": "#1a1a1a",
        cream: "#faf6f0",
        "cream-dark": "#f0e8db",
        muted: "#6b6b6b",
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
      },
      fontSize: {
        'display': ['clamp(2.5rem, 6vw, 5rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'h1': ['clamp(1.875rem, 4vw, 3rem)', { lineHeight: '1.15' }],
        'h2': ['clamp(1.5rem, 3vw, 2.25rem)', { lineHeight: '1.2' }],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease forwards',
        'fade-in': 'fadeIn 0.4s ease forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}