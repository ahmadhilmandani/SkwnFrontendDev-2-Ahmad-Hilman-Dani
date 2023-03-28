/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'blue-color': '#2F80FE',
        'light-blue-color': '#3BCFE9',
        'red-color': '#D12053',
        'light-red-color': '#FCE8ED',
      }
    },
  },
  plugins: [],
}

