import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
  return (
    <div className="header">
      <ul className="options">
        <li className="option">
          <Link to="/">Home</Link>
        </li>
        <li className="option">
          <Link to="/posts">Post</Link>
        </li>
        <li className="option">
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
