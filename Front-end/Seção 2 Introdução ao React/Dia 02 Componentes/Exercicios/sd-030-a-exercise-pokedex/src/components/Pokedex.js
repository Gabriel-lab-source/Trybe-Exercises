import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Pokemon from './Pokemon';

export default class Pokedex extends Component {
  render() {
    const { pokemonList } = this.props;
    return (
      <>
        <h1>
          Pokédex
        </h1>
        <ul>
          { pokemonList.map((pkm) => <Pokemon key={ pkm.name } pokemon={ pkm } />) }
        </ul>
      </>
    );
  }
}

Pokedex.defaultProps = {
  pokemonList: [],
};

Pokedex.propTypes = {
  pokemonList: PropTypes.arrayOf(PropTypes.shape),
};
