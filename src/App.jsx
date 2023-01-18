// Components
import { Navbar, Home } from './components';

// Hooks
import useMediaQuery from './hooks/useMediaQuery';

const App = () => {
  const isDesktop = useMediaQuery('(min-width: 1440px)');
  const isTablet = useMediaQuery('(min-width: 768px)');

  return (
    <div
      className={`h-screen ${
        isDesktop ? 'bg-desktop' : isTablet ? 'bg-tablet' : 'bg-mobile'
      } bg-no-repeat bg-cover`}
    >
      <header>
        <Navbar />
      </header>
      <main className='xl:h-[calc(100vh-160px-1.75rem)]'>
        <Home />
      </main>
    </div>
  );
};

export default App;
