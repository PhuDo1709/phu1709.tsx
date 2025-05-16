/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: false, // or 'class' if you want manual toggling
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",   // <-- required for App Router
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};






