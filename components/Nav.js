import { useEffect, useState } from 'react/cjs/react.development';
import navStyles from '../styles/Nav.module.css';

const Nav = () => {
  const [navbar, setNavbar] = useState(false);

  function navbarDisplay() {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  }

  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', navbarDisplay);
  }

  function onMenuClick(divId) {
    let element = document.getElementById(divId);
    if (element !== null) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  let navbarTypeDisplay;
  if (typeof window !== 'undefined') {
    if (window.location.pathname === '/') {
      navbarTypeDisplay = (
        <div
          className={
            navbar ? navStyles.navContainer : navStyles.navContainerHidden
          }
        >
          <div className={navStyles.left}>
            <a href='/'>Charlotte Hillborg</a>
          </div>
          <div className={navStyles.right}>
            <a href='/tavlor'>Tavlor</a>
            <a href='/betong&mosaik'>Betong & Mosaik</a>
            <a onClick={() => onMenuClick('about')}>About</a>
            <a onClick={() => onMenuClick('about')}>Contact</a>
          </div>
        </div>
      );
    } else if (window.location.pathname === '/admin') {
      console.log('This is admin');
    } else if (
      window.location.pathname === '/tavlor' ||
      window.location.pathname === '/betong&mosaik'
    ) {
      navbarTypeDisplay = (
        <div
          className={
            navbar ? navStyles.navContainer : navStyles.navContainerHidden
          }
        >
          <div className={navStyles.left}>
            <a href='/'>Charlotte Hillborg</a>
          </div>
          <div className={navStyles.right}>
            <a href='/tavlor'>Tavlor</a>
            <a href='/betong&mosaik'>Betong & Mosaik</a>
            <a onClick={() => onMenuClick('about')}>About</a>
            <a onClick={() => onMenuClick('about')}>Contact</a>
          </div>
        </div>
      );
    }
  }

  return <nav className={navStyles.nav}>{navbarTypeDisplay} </nav>;
};

export default Nav;
