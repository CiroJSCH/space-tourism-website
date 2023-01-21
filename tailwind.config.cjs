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
    },
    extend: {
      colors: {
        primary: "#D0D6F9",
        secondary: "#0B0D17",
      },
      backgroundImage: {
        homeMobile: 'url(./src/assets/home/background-home-mobile.jpg)',
        homeTablet: 'url(./src/assets/home/background-home-tablet.jpg)',
        homeDesktop: 'url(./src/assets/home/background-home-desktop.jpg)',

        destinationMobile: 'url(./src/assets/destination/background-destination-mobile.jpg)',
        destinationTablet: 'url(./src/assets/destination/background-destination-tablet.jpg)',
        destinationDesktop: 'url(./src/assets/destination/background-destination-desktop.jpg)',

        crewMobile: 'url(./src/assets/crew/background-crew-mobile.jpg)',
        crewTablet: 'url(./src/assets/crew/background-crew-tablet.jpg)',
        crewDesktop: 'url(./src/assets/crew/background-crew-desktop.jpg)',

        technologyMobile: 'url(./src/assets/technology/background-technology-mobile.jpg)',
        technologyTablet: 'url(./src/assets/technology/background-technology-tablet.jpg)',
        technologyDesktop: 'url(./src/assets/technology/background-technology-desktop.jpg)',
      }
    }
  },
  plugins: [],
};
