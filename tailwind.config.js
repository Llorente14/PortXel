/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        tiktok: "#38142a", // Nama warna (bebas), dengan kode warna
      },
    },
  },
  plugins: [],
};
