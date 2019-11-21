import React, { Component } from 'react';
import Title from '../components/Title/Title';
import BookContainer from '../components/BookContainer/BookContainer';

class Books extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <Title title="Books">
        <h1>Books Page</h1>
        <BookContainer />
      </Title>
    );
  }
}

export default Books;