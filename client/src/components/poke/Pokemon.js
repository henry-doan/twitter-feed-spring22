import { PokeConsumer } from "../../providers/PokeProvider";
import { useState } from 'react';

const Pokemon = ({ pokemon, getPokemon }) => {
  const [name, setName] = useState('')
  
  const handleSubmit = (e) => {
    e.preventDefault()
    getPokemon(name)
    setName('')
  }

  return (
    <>
      <p>Pokemon</p>
      <form onSubmit={handleSubmit}>
        <input
          name='name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Look up</button>
      </form>
      { 
        pokemon ?
          <>
            <h1>Name: {pokemon.name}</h1>
            <p>Height: {pokemon.height}</p>
            <p>Weight: {pokemon.weight}</p>
            <p>Type: {pokemon.types[0].type.name}</p>
          </>
        :
        null
      }
    </>
  )
}

const ConnectedPokemon = (props) => (
  <PokeConsumer>
    { value => <Pokemon {...props} {...value} />}
  </PokeConsumer>
)

export default ConnectedPokemon;