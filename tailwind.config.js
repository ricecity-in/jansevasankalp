/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Merriweather'],
      },
      colors: {
        'custom-text': '#054d42', // Define your custom text color
        'project-green': '#74a84a'
      },
    },
  },
  plugins: [],
}

