/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'green-lime': 'rgba(0, 170, 162, 1)',
        'light-dark': 'rgba(71, 94, 108, 1)',
        'dark-house': 'rgba(20, 27, 31, 1)',
        'text-house': 'rgba(41, 52, 57, 1)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}