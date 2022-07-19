import logo from './logo.svg';
import './App.css';
import Pokemon from './Pokemon';
import pokemons from './data';
import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Pokemon pokemons={ pokemons }/>
      </div>
    );
  }
}

export default App;
