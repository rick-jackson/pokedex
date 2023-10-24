import axios from "axios";
import type { PokemonItem } from "../entities/pokemon";

export const getPokemonsByParams = async (
  offset: number
): Promise<PokemonItem[]> => {
  const { data } = await axios.get(`${process.env.REACT_APP_API}/pokemon`, {
    params: { limit: 24, offset },
  });

  return data.results;
};
