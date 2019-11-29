import React from 'react';
import './BookList.scss';
import { useContext } from 'react';
import { BookContext } from '../../context';
import './BookList.scss';

const BookList = ({ books }) => {
  const context = useContext(BookContext);
  const bookList = context.books.map((book, i) => {
    const { title, author, publiser, published, genre, imgURL, language } = book;
    return (
      <div key={`${book} ${i}`} className="bookList__item">
        <h1 className="bookList__title">{title}</h1>
        <p className="bookList__paragraph">{author}</p>
        <p className="bookList__paragraph">{published}</p>
        <p className="bookList__paragraph">{publiser}</p>
        <p className="bookList__paragraph">{genre}</p>
        <p className="bookList__paragraph">{language}</p>
        <img src={imgURL} alt="novel" className="bookList__image" />
      </div>
    )
  })
  // const { title, author, published, publiser, genre, imgURL, language, } = context;
  return (
    <section className="bookList">
      {bookList}

    </section>
  );
}

export default BookList;