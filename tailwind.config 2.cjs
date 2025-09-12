/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./{App,components}/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        condensed: ['Roboto Condensed', 'sans-serif'],
      },
      colors: {
        'railway-red': '#D92626',
        'railway-red-orange': '#F26C22',
        'railway-orange': '#F9A03F',
        'railway-yellow': '#FFC900',
        'railway-yellow-green': '#A8D08D',
        'railway-green': '#4CAF50',
        'brand-primary': '#2A4B7C', 
        'brand-secondary': '#333333',
      }
    },
  },
  plugins: [],
}