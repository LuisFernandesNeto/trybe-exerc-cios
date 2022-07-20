import React from "react";

class Pokedex extends React.Component {
    render() {

        const { name, type, image } = this.props.pokemon;
        return (
            <div className="pokemon-card">
                Nome: { name } <br />
                Tipo: { type } <br />
                Peso médio: { this.props.pokemon.averageWeight.value }{ this.props.pokemon.averageWeight.measurementUnit} <br />
                <img className='pokemon-img' src={ image } alt="" />
            </div>
        );
    }   
}

export default Pokedex;
