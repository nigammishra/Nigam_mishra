import React, { useContext, useState, useEffect } from 'react';
import { ThemeContext } from '../../ThemeContext'; // Adjust path if needed
import { Link } from 'react-router-dom';
import { FaSun, FaMoon } from 'react-icons/fa'; // Import icons
import blackLogo from '../../assets/blacklogo.png'; // Light mode logo
import whiteLogo from '../../assets/whitelogo.png'; // Dark mode logo
import './header.css'; // Ensure this matches the file name exactly

const Header = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('.header');
      if (window.scrollY >= 80) {
        header.classList.add('show-header');
      } else {
        header.classList.remove('show-header');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`header ${isDarkMode ? 'dark-mode' : ''}`}>
      <nav className="nav container">
        <Link to="/" className="nav__logo">
          <img
            src={isDarkMode ? whiteLogo : blackLogo}
            alt="logo"
            style={{ width: '200px' }}
          />
        </Link>
        <div className={toggle ? 'nav_menu show_menu' : 'nav_menu'}>
          <ul className="nav__list mt-4">
            <li className="nav__item">
              <Link to="/" className="nav__link active-link">
                <i className="uil uil-estate nav__icon"></i> Home
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/about" className="nav__link">
                <i className="uil uil-user nav__icon"></i> About
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/skills" className="nav__link">
                <i className="uil uil-file-alt nav__icon"></i> Skills
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/services" className="nav__link">
                <i className="uil uil-briefcase-alt nav__icon"></i> Services
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/work" className="nav__link">
                <i className="uil uil-scenery nav__icon"></i> Portfolio
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/contact" className="nav__link">
                <i className="uil uil-message nav__icon"></i> Contact
              </Link>
            </li>
          </ul>
          <i
            className="uil uil-times nav__close"
            onClick={() => setToggle(!toggle)}
          ></i>
        </div>
        <div className="nav__toggle" onClick={() => setToggle(!toggle)}>
          <i className="uil uil-apps"></i>
        </div>
        <button onClick={toggleTheme} className="theme-toggle-button">
          {isDarkMode ? <FaSun size={24} /> : <FaMoon size={24} />}
        </button>
      </nav>
    </header>
  );
};

export default Header;
