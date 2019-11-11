import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.scss';

const Hero = (props) => {
  return (
    <main className='hero'>
      <div className="hero__container">
        <h1 className='hero__heading'>Welcome to Novelrr</h1>
        <p className='hero__paragraph'>Browse our new and exciting novels!</p>
        <Link to='/books' className='btn-primary'>Browse Books</Link>
      </div>
    </main>
  );
}

export default Hero;