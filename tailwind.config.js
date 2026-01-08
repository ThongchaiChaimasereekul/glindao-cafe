/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#4A0000', // เช็กตัวสะกดตรงนี้
          red: '#800000',  // เช็กตัวสะกดตรงนี้
          cream: '#FDFAF5',
        }
      },
    },
  },
  plugins: [],
}