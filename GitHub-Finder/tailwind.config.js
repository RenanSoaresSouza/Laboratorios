/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/_layout.jsx",
    "./_layout.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
