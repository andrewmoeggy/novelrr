import React from 'react';
import './Footer.scss';
import { Link } from 'react-router-dom';
const Footer = () => {

  return (
    <footer class="footer">
      <p class="footer__blurb">&copy; 2019 Andrew Moeggenberg</p>
      <ul class="footer__list">
        <Link to="/">
          <li class="footer__list-item">- Home</li>
        </Link>
        <Link to="/books">
          <li class="footer__list-item">- Books</li>

        </Link>
        <Link to="/about">
          <li class="footer__list-item">- About</li>
        </Link>

      </ul>
    </footer>
  )
}

export default Footer;