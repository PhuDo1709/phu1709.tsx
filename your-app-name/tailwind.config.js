/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E40AF', // strong blue
        brand: {
          light: '#E0F2FE',   // light blue
          DEFAULT: '#0EA5E9', // medium blue
          dark: '#0369A1',    // dark blue
        },
      },
    },
  },
  plugins: [],
};


