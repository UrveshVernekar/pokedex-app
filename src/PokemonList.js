import React from 'react'

function PokemonList({ pokemon }) {
  return (
    <div>
      <p>
        {
          [pokemon].map(
              p => (
                  <div key={p}>
                    <p>{p}</p>
                  </div>
              )
          )
        }
      </p>
    </div>
  )
}

export default PokemonList