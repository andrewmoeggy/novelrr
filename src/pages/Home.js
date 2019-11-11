import React, { Component } from 'react';
import Hero from '../components/Hero/Hero';
import SearchBar from '../components/SearchBar/SearchBar';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div>
        <Hero></Hero>
        <SearchBar />
      </div>
    );
  }
}

export default Home;