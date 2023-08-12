import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; 

const Header = () => {
  return (
    <header>
      <div className="logo">
        <Link to="/">CodeVerse</Link>
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
