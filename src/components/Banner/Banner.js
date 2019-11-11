import React from 'react';
import './Banner.scss';

const Banner = ({ children, title, blurb }) => {
  const blurbJsx = blurb ? <p className='banner__paragraph'>{blurb}</p> : null;

  return (
    <div className="banner__container">
      <h1 className='banner__heading'>{title}</h1>
      {blurbJsx}
      {children}
    </div>
  );
}

export default Banner;