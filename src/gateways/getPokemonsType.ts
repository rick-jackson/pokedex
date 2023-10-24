import axios from "axios";
import type { PokemonItem } from "../entities/pokemon";

export const getPokemonsType = async (): Promise<PokemonItem[]> => {
  const { data } = await axios.get("https://pokeapi.co/api/v2/type", {
    params: { limit: 999 },
  });

  return data.results;
};
