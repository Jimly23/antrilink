/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '2s': '375px',
        '3s': '425px'
      },
      colors: {
        dominan: '#F3F3F3',
        bg: '#FFFFFF',
        aksen: '#108EE9'
      }
    },
  },
  plugins: [],
}

