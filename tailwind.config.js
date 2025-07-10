module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'test-pink': '#ff33aa',
        'brand-dark': '#1A202C',
        'brand-light': '#F7FAFC',
        'brand-primary': '#3182CE',
        'background': '#F9FAFB', // ✅ Add this line
      },
    },
  },
  plugins: [],
};














