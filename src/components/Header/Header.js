import React from 'react';
import './Header.scss';
import logo from '../../images/logo - Copy.png';
import {
  Link
} from "react-router-dom";

const Header = () => {
  return (
    <header className='header'>
      <Link to='/'><img src={logo} alt='Novelrr Logo' /></Link>
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