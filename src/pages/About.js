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
          <p className="about__paragraph">
            The App was built under the premise of "thinking-in-react".  I started with a mock draft of the app using a wireframe software, then divided the UI into a component heirarchy.  I then idenitified my state and stateful components as I built a static version of the app. For styling I used the Block-Element-Modifier 'BEM' methodology with SASS to stay organized and avoid specificty issues and conflicts.
          </p>

        </section>
      </>
    );
  }
}

export default About;