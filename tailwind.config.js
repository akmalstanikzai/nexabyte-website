/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#000000',
        'dark-border': 'rgba(255, 255, 255, 0.1)',
        'input-bg': '#2b2b2b',
      },
    },
  },
  plugins:  [],
}