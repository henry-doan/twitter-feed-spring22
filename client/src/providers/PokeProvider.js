import React, { useState } from 'react';
import axios from 'axios';

export const PokeContext = React.createContext()

export const PokeConsumer = PokeContext.Consumer;

const PokeProvider = ({ children }) => {
  const [pokemon, setPokemon] = useState(null)

  const getPokemon = (name) => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${name}/`)
      .then( res => {
        setPokemon(res.data)
      })
      .catch( err => console.log(err))
  }

  return (
    <PokeContext.Provider value={{
      pokemon,
      getPokemon,
    }}>
      { children }
    </PokeContext.Provider>
  )
}

export default PokeProvider;