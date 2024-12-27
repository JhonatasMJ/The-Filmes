/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 
  ],
  theme: {
    extend: {
      colors: { 
        'primary': '#030712',
        'secondary': '#E05A33',
      },
      backgroundImage: {
        'fundo': "url('./src/assets/fundo.png')",
       },
        fontFamily: {
        sans: ['Poppins', 'sans-serif'], // Define Poppins como fonte padrão para textos
      },
    },
  },
  plugins: [],
}

