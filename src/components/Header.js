import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; 
import codeverseLogo from '../nature-3125912_640.jpg';

const Header = () => {
  return (
    <header>
      <div className="logo">
        <Link to="/">
          <img src={codeverseLogo} alt="CodeVerse Logo" />
        </Link>
      </div>
      <nav>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Log in</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;


