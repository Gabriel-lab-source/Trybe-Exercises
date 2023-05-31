import React from 'react';
import './App.css';
import pokemonList from './data';
import Pokedex from './components/Pokedex';

class App extends React.Component {
  render() {
    return (
      <Pokedex pokemonList={ pokemonList } />
    );
  }
}

export default App;
