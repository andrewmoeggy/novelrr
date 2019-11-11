import React from 'react';
import './Hero.scss';

const Hero = ({ children, hero }) => {
  return (
    <main className={hero}>
      {children}
    </main>
  );
}

export default Hero;