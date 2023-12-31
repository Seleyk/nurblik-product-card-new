/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif']

      },
      boxShadow: {
        '3xl': '0 10px 40px rgba(0, 0, 0, 0.1)'
      },
      colors: {
        'primary-gray-500': '#5B6175',
        'primary-gray-400': '#A1A4B0',
      },

    },
  },
  plugins: [],
} 