/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [ 
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
],
theme: {
  extend: {
    colors: {
      'textColorAcc': '#DB6B97',
      'textColorPrimary': '#2D2D2D',
      'textColorTertiary': '#737373',
      'neutralsRule': '#D2D2D2',
      'textFieldBg': '#F6F6F6'
    },
    maxWidth: {
      '1440': '1440px'
    },
    fontFamily: {
      sans: ['Poppins', ...defaultTheme.fontFamily.sans],
    },
  },
},
  plugins: [],
}
