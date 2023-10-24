import axios from "axios";
import type { PokemonItem } from "../entities/pokemon";

export const getPokemonsType = async (): Promise<PokemonItem[]> => {
  const { data } = await axios.get(`${process.env.REACT_APP_API}/type`, {
    params: { limit: 999 },
  });

  return data.results;
};
