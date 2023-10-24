import { useState, useEffect } from "react";

import type { AxiosError } from "axios";
import type { Pokemon, PokemonItem } from "../../entities/pokemon";
import { getPokemonsByType } from "../../gateways/getPokemonsByType";
import { getPokemonsByParams } from "../../gateways/getPokemonsByParams";
import { getPokemonsDataByUrl } from "../../gateways/getPokemonsDataByUrl";

const useDataFetching = (offset = 0, typeUrl: string | undefined) => {
  const [data, setData] = useState<
    Array<Partial<Pokemon> & Partial<PokemonItem>>
  >([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<AxiosError | null>(null);
  const isResetTypeUrl = !!typeUrl || typeUrl === undefined;

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const pokemons = !!typeUrl
          ? await getPokemonsByType(typeUrl)
          : await getPokemonsByParams(offset);

        setData(isResetTypeUrl ? pokemons : [...data, ...pokemons]);

        const pokemonsData = await getPokemonsDataByUrl(pokemons);

        setData(isResetTypeUrl ? pokemonsData : [...data, ...pokemonsData]);

        setLoading(false);
      } catch (error) {
        setError(error as AxiosError);
        setLoading(false);
      }
    })();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [offset, typeUrl]);

  return { data, setData, loading, error };
};

export default useDataFetching;
