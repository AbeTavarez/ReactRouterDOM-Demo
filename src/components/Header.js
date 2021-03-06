import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/welcome">Home</Link>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
