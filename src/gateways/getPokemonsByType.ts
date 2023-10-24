import axios from "axios";
import type { PokemonItem } from "../entities/pokemon";

export const getPokemonsByType = async (
  type: string
): Promise<PokemonItem[]> => {
  const { data } = await axios.get(`${process.env.REACT_APP_API}/type/${type}`);

  return data.pokemon;
};
