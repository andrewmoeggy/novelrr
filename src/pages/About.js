import React, { Component } from 'react';
import Hero from '../components/Hero/Hero';
import Banner from '../components/Banner/Banner';
import './css/About.scss';

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <>
        <Hero hero='about'>
          <Banner title='About'>
          </Banner>
        </Hero>
        <section className="about__section">
          <p className="about__paragraph">
            Novelrr is a demonstration React App created by Andrew Moeggenberg.  It utilizes the React Router and the Context API to create a clean simple single page application.  The app uses placeholder data to simulate API calls.
             </p>
        </section>
      </>
    );
  }
}

export default About;