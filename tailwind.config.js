/** @type {import('tailwindcss').Config} */
export default {

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'hover-blue': '#5EE0F1',
        'background-color': '##FBFBFB',
      },
      borderColor: {
        'div-color': '#6DF7F6',
      },
      backgroundImage: {
        'loginMen': "url('/images/men.jpg')",
        'loginWoman': "url('/images/loginWoman.png')",
        'loginLogo': "url('/images/loginLogo.png')",
        'loginNot': "url('/images/empresa.png')",
        'gestorPerfil': "url('/images/gestor.png')",
      }
    },
  },
  plugins: [],
}

