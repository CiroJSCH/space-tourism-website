// Components
import { Navbar } from './components';

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
    <div className='h-screen relative'>
      <img
        src={isDesktop ? homeDesktop : isTablet ? homeTablet : homeMobile}
        alt='background image'
        className='w-full h-full absolute top-0'
      />
      <header>
        <Navbar />
      </header>
      <main></main>
    </div>
  );
};

export default App;
