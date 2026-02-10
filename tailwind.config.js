/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#026EC4',
          cyan: '#0ECEEO',
        },
      },
    },
  },
  plugins: [],
}
