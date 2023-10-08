/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "light-gray": "#E1E1E3",
        "lighter-gray": "#F6F6F8",
      },
      backgroundColors: {
        "light-gray": "#E1E1E3",
        "lighter-gray": "#F6F6F8",
      },
    },
  },
  plugins: [],
}