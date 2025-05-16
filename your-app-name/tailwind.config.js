/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}"  // ✅ fixed this path
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
export default config



