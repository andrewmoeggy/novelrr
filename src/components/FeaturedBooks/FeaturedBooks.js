import React, { Component } from 'react';
import './FeaturedBooks.scss';
import { BookContext } from '../../context';
import Title from '../Title/Title';

class FeaturedBooks extends Component {
  state = {}
  static contextType = BookContext;

  render() {
    let { featuredBooks: books } = this.context;
    let bookList = books.map((book, i) => {
      return (
        <div className="featured__item" key={`${book} ${i}`}>
          <a href={book.amzURL} className='featured__item-link' target="_blank" rel="noopener noreferrer">
            <h1 className='featured__item-title'>{book.title}</h1>
          </a>
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