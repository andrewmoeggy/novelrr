import React, { Component } from 'react';
import Hero from '../components/Hero/Hero';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div>
        <Hero></Hero>
      </div>
    );
  }
}

export default Home;