import React from 'react';
import './Footer.scss';
import { Link } from 'react-router-dom';
const Footer = () => {

  return (
    <footer className="footer">
      <p className="footer__blurb">&copy; 2019 Andrew Moeggenberg</p>
      <ul className="footer__list">
        <Link to="/">
          <li className="footer__list-item">Home</li>
        </Link>
        <Link to="/books">
          <li className="footer__list-item">Books</li>

        </Link>
        <Link to="/about">
          <li className="footer__list-item">About</li>
        </Link>

      </ul>
    </footer>
  )
}

export default Footer;