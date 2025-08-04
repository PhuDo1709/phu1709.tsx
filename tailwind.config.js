/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}", // ✅ this one is important
  ],
  theme: {
    extend: {
      colors: {
        background: "#f8fafc", // 🎯 add this line
        textPrimary: "#1f2937", // optional if you use this
        // Add more custom colors if you need
      },
    },
  },
  plugins: [],
}



































