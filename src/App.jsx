// Libraries
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Components
import { Navbar, Home } from './components';

// Hooks
import useMediaQuery from './hooks/useMediaQuery';

const App = () => {
  const isDesktop = useMediaQuery('(min-width: 1440px)');
  const isTablet = useMediaQuery('(min-width: 768px)');

  return (
    <BrowserRouter basename='space-tourism-website'>
      <div
        className={`h-screen ${
          isDesktop ? 'bg-desktop' : isTablet ? 'bg-tablet' : 'bg-mobile'
        } bg-no-repeat bg-cover`}
      >
        <header>
          <Navbar />
        </header>
        <main className='xl:h-[calc(100vh-160px-1.75rem)]'>
          <Routes>
            <Route path='/' element={<Home />}/>
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
