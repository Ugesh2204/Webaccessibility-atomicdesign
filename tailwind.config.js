/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        height: 'height'
      },
      fontFamily: {
        'Redhat': ['Red Hat Display', 'sans-serif'],
      },
      colors: {
        "blue-custom": "#4D96A9",
        "violet-custom": "#855FB1",
        "lightviolet" : "#D9B8FF",
        "lightblue": "#8FE3F9",
        "dark-custom":"#28283D"
      }
    },
  },
  plugins: [],
}