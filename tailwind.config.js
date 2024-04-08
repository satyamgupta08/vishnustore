/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'lg': '1200px', // Change the value of lg breakpoint to 1200px
      },
    },
  },
  plugins: [],
}