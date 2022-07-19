import React from 'react';
import PropTypes from 'prop-types'; 
import pokemons from './data';
import Pokedex from './Pokedex';

class Pokemon extends React.Component {
    render() {

      const pokemonsList = this.props.pokemons;
      
      const pokemonsElements = pokemonsList.map((pokemon) =>{
        return <Pokedex key={ pokemon.name } pokemon={ pokemon }/>
      })
      return (
        <div className='pokedex'>
          <h1><strong>POKÉDEX</strong></h1>

          { pokemonsElements }
        </div>
      );
    }
  };



  Pokemon.propTypes = {
    pokemons: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        type: PropTypes.string,
        averageWeight: PropTypes.shape({
            value: PropTypes.number,
            measurementUnit: PropTypes.string,
        }),
        image: PropTypes.string,
        moreInfo: PropTypes.string
    }))
  }
  
  export default Pokemon;
  