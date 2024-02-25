/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Anek Latin', 'sans-serif'],
      },
      colors: {
        'custom-text': '#054d42', // Define your custom text color
      },
    },
  },
  plugins: [],
}

