import React from 'react';
import './Header.scss';
import {
  Link
} from "react-router-dom";

const Header = () => {
  return (
    <header className='header'>
      <h1 className='heading-1'>Novelrr -</h1>
      <nav className='nav'>
        <ul className='nav__list'>
          <li className='nav__list--item'><Link to='/'>Home</Link></li>
          <li className='nav__list--item'><Link to='/books'>Books</Link></li>
          <li className='nav__list--item'><Link to='/about'>About</Link></li>
        </ul>
      </nav>
    </header>


  );
}

export default Header;