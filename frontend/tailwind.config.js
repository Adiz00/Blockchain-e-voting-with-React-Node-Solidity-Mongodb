/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        'deep-black': '#000000',
        'dark-gray': '#141414',
        'medium-gray': '#282828',
        'deep-purple': '#230046',
        'rich-purple': '#320046',
      },
    },
  },
  plugins: [],
}

