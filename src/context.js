import React, { Component } from 'react';
import items from './fauxData/data.json';

const BookContext = React.createContext();

class BookProvider extends Component {
  state = {
    featuredBooks: []
  }


  componentDidMount() {
    let books = items;
    let featuredBooks = books.filter(book => book.featured === 'true');
    this.setState({
      featuredBooks: featuredBooks
    })
  }

  render() {
    return (
      <BookContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </BookContext.Provider>
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