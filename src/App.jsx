// Components
import { Navbar, Home } from './components';

// Assets
import homeMobile from './assets/home/background-home-mobile.jpg';
import homeTablet from './assets/home/background-home-tablet.jpg';
import homeDesktop from './assets/home/background-home-desktop.jpg';

// Hooks
import useMediaQuery from './hooks/useMediaQuery';

const App = () => {
  const isDesktop = useMediaQuery('(min-width: 1440px)');
  const isTablet = useMediaQuery('(min-width: 768px)');

  return (
    <div
      className={`h-screen ${isDesktop ? "bg-desktop" : isTablet ? "bg-tablet" : "bg-mobile"} bg-cover`}
    >
      <header>
        <Navbar />
      </header>
      <main className='z-10'>
        <Home />
      </main>
    </div>
  );
};

export default App;
