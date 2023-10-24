import { useState, useEffect } from "react";

import type { AxiosError } from "axios";
import type { Pokemon, PokemonItem } from "../../entities/pokemon";
import { getPokemonsByParams } from "../../gateways/getPokemonsByParams";
import { getPokemonsDataByUrl } from "../../gateways/getPokemonsDataByUrl";

const useDataFetching = () => {
  const [data, setData] = useState<
    Array<Partial<Pokemon> & Partial<PokemonItem>>
  >([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [offset, setOffset] = useState<number>(0);
  const [error, setError] = useState<AxiosError | null>(null);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const pokemonsList = await getPokemonsByParams(offset);
        setData([...data, ...pokemonsList]);

        const pokemonsData = await getPokemonsDataByUrl(pokemonsList);
        setData([...data, ...pokemonsData]);

        setLoading(false);
      } catch (error) {
        setError(error as AxiosError);
        setLoading(false);
      }
    })();
  }, [offset]);

  return { data, setData, loading, error, setOffset };
};

export default useDataFetching;
