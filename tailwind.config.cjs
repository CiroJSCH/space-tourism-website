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
      belle: ['Bellefair', 'serif'],
      barlow: ['Barlow Condensed', 'sans-serif'],
      brl: ['Barlow', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: "#D0D6F9",
        secondary: "#0B0D17",
      },
      backgroundImage: {
        homeMobile: 'url(./assets/home/background-home-mobile.jpg)',
        homeTablet: 'url(./assets/home/background-home-tablet.jpg)',
        homeDesktop: 'url(./assets/home/background-home-desktop.jpg)',

        destinationMobile: 'url(./assets/destination/background-destination-mobile.jpg)',
        destinationTablet: 'url(./assets/destination/background-destination-tablet.jpg)',
        destinationDesktop: 'url(./assets/destination/background-destination-desktop.jpg)',

        crewMobile: 'url(./assets/crew/background-crew-mobile.jpg)',
        crewTablet: 'url(./assets/crew/background-crew-tablet.jpg)',
        crewDesktop: 'url(./assets/crew/background-crew-desktop.jpg)',

        techMobile: 'url(./assets/technology/background-technology-mobile.jpg)',
        techTablet: 'url(./assets/technology/background-technology-tablet.jpg)',
        techDesktop: 'url(./assets/technology/background-technology-desktop.jpg)',
      }
    }
  },
  plugins: [],
};
