import React from 'react';
import { withBookConsumer } from '../../context';
import Loading from './../Loading/Loading';
import BookList from './../BookList/BookList';

const BookContainer = ({ context }) => {
  const { books } = context;
  if (false) {
    return (<Loading />)
  } else {
    return (
      <>
        <BookList books={books} />
      </>
    )
  }

}

export default withBookConsumer(BookContainer);