/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        introduction: '#06d068', // Benzol Green
        literature: '#07d6c1', // Pristine Oceanic
        methodology: '#14b0f7', // Zima Blue
        analysis: '#3d81ff' // Dodger Blue
      }
    },
  },
  plugins: [],
}