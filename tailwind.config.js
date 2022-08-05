/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Redhat': ['Red Hat Display', 'sans-serif'],
      },
     
      colors: {
        "blue-custom": "#4D96A9",
        "violet-custom": "#855FB1",
        "lightblue": "#8FE3F9",
        "dark-custom":"#28283D"
      }
    },
  },
  plugins: [],
}