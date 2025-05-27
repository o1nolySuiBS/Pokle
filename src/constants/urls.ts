const pokemon = 'https://pokeapi.co/api/v2/pokemon';
const ability = 'https://pokeapi.co/api/v2/ability';
const type = 'https://pokeapi.co/api/v2/type';

const urls = {
    pokemon,
    pokemonById: (id: string) => `${pokemon}/${id}`,
    byAbilities: (name: string) => `${ability}/${name}`,
    byTypes: (name: string) => `${type}/${name}`,
}

export { urls };
