import React from 'react';
import './Title.scss';

const Title = ({ children, title }) => {
  return (
    <section className="title">
      <h2 className='title__heading'>{title}</h2>
      <div className='title__underline'></div>
      {children}
    </section>

  );
}

export default Title;