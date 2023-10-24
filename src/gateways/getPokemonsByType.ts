import axios from "axios";
import type { PokemonItem } from "../entities/pokemon";

export const getPokemonsByType = async (
  type: string
): Promise<PokemonItem[]> => {
  const { data } = await axios.get(`https://pokeapi.co/api/v2/type/${type}`);

  return data.pokemon;
};
