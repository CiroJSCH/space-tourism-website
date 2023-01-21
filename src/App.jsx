// Libraries
import { Routes, Route, useLocation } from 'react-router-dom';

// Components
import { Navbar, Home } from './components';
import Destination from './components/Destination';

// Hooks
import useMediaQuery from './hooks/useMediaQuery';

// Util
import { bgImage } from './util/backgroundImage';

const App = () => {
  const isDesktop = useMediaQuery('(min-width: 1440px)');
  const isTablet = useMediaQuery('(min-width: 768px)');

  const { pathname } = useLocation();
  const background = bgImage[pathname];
  console.log(pathname);

  return (
    <div
      className={`h-screen bg-no-repeat bg-cover ${
        isDesktop
          ? background['desktop']
          : isTablet
          ? background['tablet']
          : background['mobile']
      }`}
    >
      <header>
        <Navbar />
      </header>
      <main className='xl:h-[calc(100vh-160px-1.75rem)]'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/destination' element={<Destination />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
