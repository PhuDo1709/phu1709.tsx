/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#f8fafc", // <-- Add this
        primary: "#1e40af",    // Example for bg-primary
        secondary: "#9333ea",  // Example for bg-secondary
        brand: {
          dark: "#111827",
          light: "#f9fafb",
          primary: "#3b82f6"
        }
      }
    }
  },
  plugins: []
};



