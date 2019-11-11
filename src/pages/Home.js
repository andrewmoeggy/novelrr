import React, { Component } from 'react';
import Hero from '../components/Hero/Hero';
import Banner from '../components/Banner/Banner';
import Services from '../components/Services/Services';
import { Link } from 'react-router-dom';


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div>
        <Hero title="Welcome to Novelrr" hero='hero'>
          <Banner title='Welcome to Novelrr' blurb='Browse our new and exciting novels!'>
            <Link to='/books' className='btn-primary'>Browse Books</Link>
          </Banner>
        </Hero>
        <Services />
      </div>
    );
  }
}

export default Home;