// Libraries
import { Routes, Route, useLocation } from 'react-router-dom';

// Components
import { Navbar, Home, Crew, Destination, Technology } from './components';

// Hooks
import useMediaQuery from './hooks/useMediaQuery';

// Util
import { bgImage } from './util/backgroundImage';
import { title } from './util/title';

const App = () => {
  const isDesktop = useMediaQuery('(min-width: 1440px)');
  const isTablet = useMediaQuery('(min-width: 768px)');

  const { pathname } = useLocation();
  const background = bgImage[pathname];

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
      <main className='xl:h-[calc(100vh-160px-1.75rem)] md:px-[38.5px] xl:pl-[165px]'>
        {pathname !== '/' && (
          <div className='flex justify-center md:mt-4 md:justify-start'>
            <p className='font-barlow tracking-[2.7px] leading-[19px] text-white md:text-[20px] md:leading-6 md:tracking-[3.375px] xl:text-[28px] xl:leading-[34px] xl:tracking-[4.725px]'>
              <span className='opacity-25 mr-[18px] md:mr-[19px] font-bold'>{title[pathname].number}</span>
              <span className=''>{title[pathname].phrase}</span>
            </p>
          </div>
        )}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/destination' element={<Destination />} />
          <Route path='/crew' element={<Crew />} />
          <Route path='/technology' element={<Technology />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
