/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1e90ff',
        secondary: '#DCE5E2',
        lightWhite: '#F8F9FA',
      },
      fontFamily: {
        roboto: ['"Roboto"', 'sans-serif'], 
        russoOne: ['"Russo One"', 'sans-serif'], 
      },
    },
    screens: {
      ms: '320.5px',
      mm: '375.5px',
      ml: '425.5px',
      t: '768.5px',
      l: '1024.5px',
      ll: '1440.5px',
    },
  },
  plugins: [],
}