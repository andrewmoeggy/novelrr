import React, { Component } from 'react';
import items from './fauxData/data.json';

const BookContext = React.createContext();

class BookProvider extends Component {
  state = {

  }

  componentDidMount() {
    let books = items;
    let featuredBooks = books.filter(book => book.featured === true);
  }

  render() {
    return (
      <BookContext value={this.state}>
        {this.props.children}
      </BookContext>
    )
  }
}

const BookConsumer = BookContext.Consumer;

export function withBookConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <BookConsumer>
        {(value) => <Component {...props} context={value} />}
      </BookConsumer>
    )
  }
}

export { BookProvider, BookConsumer, BookContext };