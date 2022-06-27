const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", './src/**/*.{svelte,js,ts}'], // for unused CSS
  theme: {
    extend: {
      // backgroundImage: {
      //   'hero-pattern': "url('/images/background.jpg')",
      // },
      fontFamily: {
        sans: ['Nunito', ...defaultTheme.fontFamily.sans],
      },
      container: {
        center: true,
        padding: '1rem',
      },
      colors: {
        'primary': {
          light: "#6F3FFF",
          DEFAULT: "#5821FF",
          dark: "#340FA5"
        },
        'secondary': {
          light: "#62F8D3",
          DEFAULT: "#0FCD9D",
          dark: "#04906D"
        }
      }
    },
  },
  plugins: [],
}
