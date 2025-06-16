/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./styles/**/*.{css}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-dark': '#1e293b',
        'brand-light': '#f8fafc',
        'brand-primary': '#2563eb',
      },
    },
  },
  plugins: [],
};


