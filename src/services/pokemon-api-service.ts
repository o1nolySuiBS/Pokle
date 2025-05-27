import { IPokemon, IPokemonList } from '@/interface/IPokemon'
import { urls } from '@/constants/urls'
import axios, { AxiosResponse } from 'axios'

export type par<T> = Promise<AxiosResponse<T>>;

const pokemonService = {
  getAll: (url: string): par<IPokemonList> => axios.get<IPokemonList>(url),

  getOneById: (id: string): par<IPokemon> => axios.get<IPokemon>(urls.pokemonById(id)),

  getByType: (typeName: string): par<IPokemonList> => axios.get<IPokemonList>(urls.byTypes(typeName)),

  getByAbility: (abilityName: string): par<IPokemonList> => axios.get<IPokemonList>(urls.byAbilities(abilityName)),

  getByName: (name: string): par<IPokemon> => axios.get<IPokemon>(`${urls.pokemon}/${name}`),
}

export { pokemonService }
