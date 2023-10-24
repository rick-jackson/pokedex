import { useState, useEffect } from "react";
import { getPokemonsType } from "../../gateways/getPokemonsType";
import type { PokemonItem } from "../../entities/pokemon";

const useAutoComplete = () => {
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState<PokemonItem[]>([]);
  const loading = open && options.length === 0;

  useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      const pokemonsType = await getPokemonsType();

      if (active) {
        setOptions(pokemonsType);
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

  return { open, setOpen, options, loading };
};

export default useAutoComplete;
