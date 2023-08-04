import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaTimes, FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [burgerActive, setBurgerActive] = useState(false);

  const handleSetBurgerActive = () => {
    setBurgerActive(!burgerActive);
    if (!burgerActive) {
      document.body.classList.add('locked');
    } else {
      document.body.classList.remove('locked');
    }
  };

  const closeMenu = () => {
    setBurgerActive(false);
    document.body.classList.remove('locked');
  };

  const [color, setNavbarColor] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setNavbarColor(true);
      } else {
        setNavbarColor(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [])
  

  return (
    <nav className={color ? 'navbar navbar--dark' : 'navbar'}>
      <Link to='/' onClick={closeMenu}>
        <h1 className="navbar__logo">glx travel</h1>
      </Link>
      <menu className={burgerActive ? 'menu active' : 'menu'}>
        <Link to='/' className='menu__link' onClick={closeMenu}>
          Home
        </Link>
        <Link to='/pricing' className='menu__link' onClick={closeMenu}>
          Pricing
        </Link>
        <Link to='/training' className='menu__link' onClick={closeMenu}>
          Training
        </Link>
        <Link to='/contact' className='menu__link' onClick={closeMenu}>
          Contact
        </Link>
      </menu>
      <div className="burger-btn" onClick={handleSetBurgerActive}>
        {burgerActive ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
};

export default Navbar;
