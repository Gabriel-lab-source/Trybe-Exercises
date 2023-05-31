import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Pokemon extends Component {
  render() {
    const { pokemon } = this.props;
    const { name, type, averageWeight, image } = pokemon;
    return (
      <li>
        <h1>
          { name }
        </h1>
        <h2>
          { type }
        </h2>
        <h3>
          {`${averageWeight.value} ${averageWeight.measurementUnit}`}
        </h3>
        <img src={ image } alt={ name } />
      </li>
    );
  }
}

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.shape({
      value: PropTypes.number,
      measurementUnit: PropTypes.string,
    }),
    image: PropTypes.node,
  }).isRequired,
};
