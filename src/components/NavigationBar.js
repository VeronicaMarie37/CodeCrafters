import React from 'react';
import { Link } from 'react-router-dom';
import './NavigationBar.css'; 

const NavigationBar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Courses</Link></li>
        <li><Link to="/tutorials">Tutorials</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/Journal">Code Journal Entries</Link></li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
