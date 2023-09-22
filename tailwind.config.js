/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
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

