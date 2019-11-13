import React, { Component } from 'react';
import Title from '../Title/Title';
import './Services.scss'
import { services } from '../../fauxData/services';

class Services extends Component {
  constructor(props) {
    super(props);
    this.state = {
      services: services
    }
  }

  getServices() {

  }
  render() {
    // Map through faux data to simulate rendering dynamic content in JSX
    const cards = this.state.services.map((service => {
      return (
        <div className="services__card" key={service.description}>
          <i className={`services__icon ${service.iconCSSClass}`}></i>
          <h3 className="services__heading">{service.description}</h3>
          <p className="services__blurb">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur corrupti dolorum officia!</p>
        </div>
      );
    }));

    return (
      <>
        <Title title='Services'>
          <div className="services">
            {cards}
          </div>
        </Title>
      </>
    );
  }
}

export default Services;