/** @type {import('tailwindcss').Config} */
export default {
  content: [ 
  './src/**/*.tsx',
  './src/**/*.html',
  './src/**/*.jsx',
  './src/**/*.js',
  './src/**/*.css'],
  theme: {
    extend: {
      backgroundColor: {
        'hover-blue': '#5EE0F1',
        'background-color': '##FBFBFB',
      },
      borderColor: {
        'div-color': '#6DF7F6',
      },
    },
  },
  plugins: [],
}

