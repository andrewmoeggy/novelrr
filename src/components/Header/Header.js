import React from 'react';
import './Header.scss';

const Header = (props) => {
  return (
    <header className='header'>
      <h1 className=''>Novelrr</h1>
      <nav className='nav'>
        <ul className='nav__list'>
          <li className='nav__list--item'><a href="https://www.google.com">Home</a></li>
          <li className='nav__list--item'><a href="https://www.google.com">Books</a></li>
          <li className='nav__list--item'><a href="https://www.google.com">About</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;