/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
    },
    fontFamily: {
      'belle': ['Bellefair', 'serif'],
      'barlow': ['Barlow Condensed', 'sans-serif']
    },
    colors: {
      primary: "#D0D6F9",
      secondary: "#0B0D17",
    }
  },
  plugins: [],
};
