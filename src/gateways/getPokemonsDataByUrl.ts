import axios from "axios";
import type { Pokemon, PokemonItem } from "../entities/pokemon";

const dataPromises = (result: PokemonItem[]) => {
  return result.map(async ({ pokemon, url }) => {
    const { data } = await axios.get(pokemon?.url || url);

    return data;
  });
};

export const getPokemonsDataByUrl = async (
  pokemons: PokemonItem[]
): Promise<Pokemon[]> => {
  return await Promise.all(dataPromises(pokemons));
};
