/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Ajuste conforme a estrutura do seu projeto
  ],
  plugins: [require("daisyui")],
  daisyui: {
    themes: true, // ou ['light', 'dark', 'cupcake', etc...] para ativar os temas que quiser
  },
};
