import axios from "axios";
import type { PokemonItem } from "../entities/pokemon";

export const getPokemonsByParams = async (
  offset: number
): Promise<PokemonItem[]> => {
  const { data } = await axios.get("https://pokeapi.co/api/v2/p1okemon", {
    params: { limit: 24, offset },
  });

  return data.results;
};
