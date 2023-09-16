/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'loginMen': "url('/images/login.png')",
        'loginWoman': "url('/images/loginWoman.png')",
        'loginLogo': "url('/images/loginLogo.png')",
        'loginNot': "url('/images/empresa.jpg')",
      }
    },
  },
  plugins: [],
}

