
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        helix: {
          terracotta: '#D4735E',
          sage: '#8B9D83',
          beige: '#F5F1E8',
          brown: '#3E2723',
          cream: '#FFFDF9',
        },
        // Keep sa- colors for backward compatibility with archived pages
        sa: {
          terracotta: '#D4735E',
          sage: '#8B9D83',
          beige: '#F5F1E8',
          brown: '#3E2723',
          cream: '#FFFDF9',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}
