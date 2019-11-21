import React from 'react';
import { withBookConsumer } from '../../context';
import Loading from './../Loading/Loading';

const BookContainer = ({ context }) => {

  if (true) {
    return (<Loading />)
  } else {
    return (<h1>Hey</h1>)
  }

}

export default withBookConsumer(BookContainer);