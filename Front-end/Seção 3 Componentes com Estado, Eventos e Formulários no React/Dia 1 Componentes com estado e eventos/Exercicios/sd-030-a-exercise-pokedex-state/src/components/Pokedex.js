import React from 'react';
import { arrayOf } from 'prop-types';
import Pokemon from './Pokemon';
import { pokemonType } from '../types';

class Pokedex extends React.Component {
  state = {
    pokemonIndex: 0,
    filteredType: '',
  };

  nextPokemon = (numberOfPokemon) => {
    this.setState((state) => ({
      pokemonIndex: (state.pokemonIndex + 1) % numberOfPokemon,
    }));
  };

  filterPokemon = (filteredType) => {
    this.setState({ filteredType, pokemonIndex: 0 });
  };

  fetchFilteredPokemon = () => {
    const { pokemonList } = this.props;
    const { filteredType } = this.state;

    return pokemonList.filter((pokemon) => (
      filteredType === '' ? true : pokemon.type === filteredType
    ));
  };

  render() {
    const { pokemonIndex } = this.state;
    const filteredPokemon = this.fetchFilteredPokemon();
    const pokemon = filteredPokemon[pokemonIndex];
    return (
      <>
        <h1> Pokédex </h1>
        <div className="pokedex">
          <Pokemon pokemon={ pokemon } />
          <button
            type="button"
            onClick={ () => this.nextPokemon(filteredPokemon.length) }
          >
            Próximo pokémon

          </button>
          <button
            type="button"
            onClick={ () => this.filterPokemon('Fire') }
          >
            Fire
          </button>
          <button
            type="button"
            onClick={ () => this.filterPokemon('Psychic') }
          >
            Psychic
          </button>
        </div>
      </>
    );
  }
}

Pokedex.defaultProps = {
  pokemonList: [],
};

Pokedex.propTypes = {
  pokemonList: arrayOf(pokemonType),
};

export default Pokedex;
