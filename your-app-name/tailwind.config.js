/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}", // add this if using src/
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3B82F6", // Tailwind's blue-500
        "primary-foreground": "#ffffff",
      },
    },
  },
  plugins: [],
};









