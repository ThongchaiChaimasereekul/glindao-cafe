/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'brand-red': '#7f1d1d',     // แดงเลือดหมูหลัก
        'brand-red-light': '#991b1b',
        'brand-dark': '#0c0a09',
        'brand-card': '#1c1917',
      },
      fontFamily: {
        // เปลี่ยนเป็นชื่อ Font ที่จารย์ใช้นะครับ (เช่น Kanit, Prompt, หรือ Inter)
        sans: ['Inter', 'Kanit', 'sans-serif'],
      },
    },
  },
  plugins: [],
}