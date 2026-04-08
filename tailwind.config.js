/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: "#d4af37",
        "gold-dark": "#b38b2e",
        cream: "#f8f1eb",
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      fontSize: {
        // Custom responsive heading sizes
        'hero': ['2.75rem', { lineHeight: '1.1' }],     // Mobile
        'hero-md': ['3.5rem', { lineHeight: '1.1' }],   // Tablet
        'hero-lg': ['4.5rem', { lineHeight: '1.1' }],   // Desktop

        'h1': ['2.25rem', { lineHeight: '1.2' }],
        'h1-md': ['2.75rem', { lineHeight: '1.2' }],
        'h1-lg': ['3.5rem', { lineHeight: '1.2' }],

        'h2': ['1.875rem', { lineHeight: '1.3' }],
        'h2-md': ['2.25rem', { lineHeight: '1.3' }],
        'h2-lg': ['2.75rem', { lineHeight: '1.3' }],
      }
    },
  },
  plugins: [],
}