'use client'

import React, { useEffect, useState } from 'react'
import { pokemonService } from '@/services/pokemon-api-service'

const PokemonList = () => {
  const [pokemon, setPokemon] = useState([])

  useEffect(() => {
    pokemonService.getAll('https://pokeapi.co/api/v2/pokemon').then(response => {
      setPokemon(response.data)
    })
  }, [])


  return (
    <div>


    </div>
  )
}

export default PokemonList

