// Libraries
import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

// assets
import logo from '../assets/shared/logo.svg';
import hamburger from '../assets/shared/icon-hamburger.svg';
import close from '../assets/shared/icon-close.svg';

const links = [
  { number: '00', name: 'home', path: '/' },
  { number: '01', name: 'destination', path: '/destination' },
  { number: '02', name: 'crew', path: '/crew' },
  { number: '03', name: 'technology', path: '/technology' },
];

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <nav className='flex items-center p-6 md:pt-0 md:pr-0 md:pl-[39px] justify-between relative xl:pl-14 xl:pt-10 xl:pr-0'>
      <img
        src={logo}
        alt='Logo'
        className='w-[40px] h-[40px] md:w-[48px] md:h-[48px] cursor-pointer'
        onClick={() => navigate('/')}
      />
      <div className='md:hidden'>
        {/* START OF MOBILE MENU */}
        <img
          src={openMenu ? close : hamburger}
          alt='Menu'
          className={`${
            openMenu
              ? 'w-[19px] h-[19px] -rotate-180'
              : 'w-[24px] h-[21px] rotate-180'
          } z-[51] ease-in duration-500 relative`}
          onClick={() => setOpenMenu((prev) => !prev)}
        />
        <div
          className={`fixed right-0 top-0 navMenu slideRight z-1 h-screen w-[70%] max-w-[254px] flex ${
            openMenu ? 'translate-x-0' : 'translate-x-[254px]'
          } ease-in-out duration-300 z-50`}
        >
          <ul className='ml-8 mt-[169px] flex flex-col'>
            {links.map(({ number, name, path }, index) => (
              <li key={`${name}-link`}
              className={`${index !== links.length - 1 ? 'mb-8' : 'mb-0'}`}>
                <Link
                  to={path}
                  className={`font-barlow text-white tracking-[2.7px] text-base leading-[19px]`}
                  onClick={() => setOpenMenu(false)}
                >
                  <span className='font-bold'>{number}</span>
                  <span className='ml-3 font-normal uppercase'>{name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* END OF MOBILE MENU */}
      </div>
      {/* START OF TABLET/DESKTOP MENU */}
      <div className='hidden md:flex w-[450px] xl:w-[830px] h-[96px] navMenu relative top-0 right-0 items-center order-3'>
        <ul className='flex font-barlow text-white tracking-[2.3625px] xl:tracking-[2.7px] uppercase m-auto h-full text-[16px] xl:text-[19px]'>
          {links.map(({ name, number, path }, index) => (
            <li
              key={`${name}-link`}
              className={`${index !== links.length - 1 ? 'mr-9' : 'mr-0'}`}
            >
              <Link
                to={path}
                className={`h-full flex items-center relative border-b-[3px] border-b-transparent ${
                  pathname === path
                    ? 'after:hover:hidden border-b-white'
                    : 'border-b-0 after:content-[""] after:w-0 after:h-[3px] after:bg-[rgba(255,255,255,0.5)] after:transition-[width] after:duration-300 after:ease-in after:hover:w-full after:absolute after:bottom-0 after:left-0'
                } cursor-pointer ease-in-out duration-300`}
              >
                <span className='hidden xl:block font-bold mr-5'>{number}</span>
                <span>{name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {/* END OF TABLET/DESKTOP MENU */}

      {/* WHITE LINE ON DESKTOP MENU */}
      <hr className='bg-white opacity-25 hidden xl:flex h-[1px] w-[60%] order-1 ml-[3.5rem] mr-[-1.6rem]'></hr>
    </nav>
  );
};

export default Navbar;
