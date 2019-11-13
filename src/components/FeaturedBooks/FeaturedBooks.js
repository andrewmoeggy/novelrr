import React, { Component } from 'react';
import './FeaturedBooks.scss';
import featured from '../../fauxData/data.json';
import Title from '../Title/Title';

class FeaturedBooks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      featured: featured
    }
  }
  render() {
    const bookList = this.state.featured.map((book, i) => {
      return (
        <div className="featured__item">
          <h1 className='featured__item-title'>{book.title}</h1>
          <p className='featured__item-description'>{book.author}</p>
          <p className='featured__item-description'>{book.published}</p>
          <p className='featured__item-description'>{book.publisher}</p>
          <p className='featured__item-description'>{book.genre}</p>
          <img src={book.imgURL} alt={book.title} className='featured__item-image' />
        </div>
      )
    })
    return (
      <section className="featured">
        <Title title='Featured Books'>
          <div className="featured-container">

            {bookList}

          </div>
        </Title>
      </section>

    );
  }
}

export default FeaturedBooks;