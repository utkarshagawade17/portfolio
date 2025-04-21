/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        'pastel-blue': '#A7C7E7',
        'pastel-pink': '#F9D5E5',
        'pastel-green': '#D5F5E3',
        'pastel-peach': '#FFE5B4',
        'pastel-lavender': '#E6E6FA',
      },
      fontFamily: {
        handwritten: ['Caveat', 'cursive'],
        serif: ['Playfair Display', 'serif'],
        sans: ['Poppins', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
