import React, { useState } from "react";
import { Backdrop, useMediaQuery } from "@mui/material";

import type { Pokemon } from "../../entities/pokemon";
import useDataFetching from "../../common/hooks/useDataFetching";
import PokemonsList from "./PokemonsList";
import { theme } from "../../theme";
import Aside from "./Aside";

import * as Styled from "./Pokedex.styled";

const Pokedex: React.FC = () => {
  const [activePokemon, setActivePokemon] = useState<Pokemon | null>(null);
  const [offset, setOffset] = useState<number>(0);
  const [type, setType] = useState<string | undefined>("");

  const { data, loading, error } = useDataFetching(offset, type);
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  if (error)
    return (
      <div style={{ margin: "auto" }}>
        {/* <h2>{error?.response?.data}</h2> */}
        <h2>{error?.response?.status}</h2>
      </div>
    );

  return (
    <Styled.Wrapper>
      <PokemonsList
        setActivePokemon={setActivePokemon}
        activePokemon={activePokemon}
        pokemonsData={data}
        loading={loading}
        setOffset={setOffset}
        setType={setType}
      />
      {matches ? (
        <Backdrop
          sx={{
            color: "#fff",
            zIndex: (theme) => theme.zIndex.drawer + 1,
          }}
          open={!!activePokemon && matches}
          onClick={() => setActivePokemon(null)}
        >
          <Aside activePokemon={activePokemon} />
        </Backdrop>
      ) : (
        <Aside activePokemon={activePokemon} />
      )}
    </Styled.Wrapper>
  );
};

export default Pokedex;
