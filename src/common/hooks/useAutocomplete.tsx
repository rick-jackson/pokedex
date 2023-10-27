import { useState, useEffect } from "react";
import { getPokemonsType } from "../../gateways/getPokemonsType";
import type { PokemonItem } from "../../entities/pokemon";
import { AxiosError } from "axios";

const useAutoComplete = () => {
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState<PokemonItem[]>([]);
  const [error, setError] = useState<AxiosError | null>(null);
  const loading = open && options.length === 0;

  useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      try {
        setError(null);
        const pokemonsType = await getPokemonsType();

        if (active) {
          setOptions(pokemonsType);
        }
      } catch (e) {
        setError(e as AxiosError);
        return;
      }
    })();

    return () => {
      active = false;
    };
  }, [loading]);

  useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  return { open, setOpen, options, loading, error };
};

export default useAutoComplete;
