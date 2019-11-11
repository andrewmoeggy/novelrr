import React, { Component } from 'react';
import Title from '../Title/Title';
import './Services.scss'
import { services } from '../../fauxData/data';

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
    const cards = this.state.services.map((service => {
      return (
        <div className="services__card">
          <h3 className="services__heading">{service}</h3>
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