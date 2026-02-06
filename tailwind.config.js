/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'agro-green': '#2d5016',
        'agro-light': '#8bc34a',
        'agro-lighter': '#c5e1a5',
      },
      fontFamily: {
        'marathi': ['Noto Sans Devanagari', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
