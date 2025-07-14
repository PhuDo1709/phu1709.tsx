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
        // Replace brand-primary with deep blue for now
        'brand-primary': '#1E3A8A',  // Deep Blue
        'background': '#F3F4F6',     // Light neutral background (gray-100)
        'textPrimary': '#374151',    // Dark gray for text
      },
    },
  },
  plugins: [],
};















