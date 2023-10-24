import React, { useState } from "react";
import { Backdrop, useMediaQuery } from "@mui/material";

import type { Pokemon } from "../../entities/pokemon";
import PokemonsList from "./PokemonsList";
import { theme } from "../../theme";
import Aside from "./Aside";

import * as Styled from "./Pokedex.styled";

const Pokedex: React.FC = () => {
  const [activePokemon, setActivePokemon] = useState<Pokemon | null>(null);

  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Styled.Wrapper>
      <PokemonsList
        setActivePokemon={setActivePokemon}
        activePokemon={activePokemon}
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
