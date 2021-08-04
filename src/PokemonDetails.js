import React, { Component } from 'react';
import Pokemon from './Pokemon';

class PokemonDetails extends Component {
  render() {
    const { 
      // name,
      // type,
      // averageWeight: { value, measurementUnit},
      summary,
      foundAt,
      pokemon,
    } = this.props;
    return (
      <div>
        <Pokemon pokemon={pokemon}  />
        {summary}
        {foundAt.map(({ location, map, name }) => (
            <div key={location}>
              <img src={map} alt={`${name} location`} />
              <p>
                <em>{location}</em>
              </p>
            </div>
        ))}
      </div>
      )
    }
  }
  
  /* 
Nome do pokémon;
Tipo do pokémon;
Peso do pokémon, com sua devida medida de peso;
Sumário informativo a respeito do pokémon;
Mapa(s) que mostra(m) as possíveis localizações do pokémon.
  */
export default PokemonDetails;