import { useState } from "react";
import { Button, CircularProgress } from "@mui/material";

import type { Pokemon } from "../../../entities/pokemon";
import useDataFetching from "../../../common/hooks/useDataFetching";
import PokemonCardSkeleton from "../PokemonCard/Skeleton";
import PokemonCard from "../PokemonCard";
import Toolbar from "./Toolbar";

import * as Styled from "./PokemonsList.styled";

type PokemonsListProps = {
  setActivePokemon: React.Dispatch<React.SetStateAction<Pokemon | null>>;
  activePokemon: Pokemon | null;
};

const PokemonsList: React.FC<PokemonsListProps> = ({
  setActivePokemon,
  activePokemon,
}) => {
  const [filterType, setFilterType] = useState<string>("");
  const { data, loading, setOffset, error } = useDataFetching();

  return (
    <Styled.Container>
      <Toolbar loading={loading} setFilterType={setFilterType} />
      <Styled.PokemonsList>
        {data
          .filter((pokemon) => {
            if (!pokemon?.id || !filterType) return pokemon;
            return pokemon.types
              ?.map(({ type }) => type.name)
              .includes(filterType);
          })
          .map((pokemon) => {
            if (loading && !pokemon?.id)
              return <PokemonCardSkeleton key={pokemon.url} />;
            return (
              <PokemonCard
                data={pokemon as Pokemon}
                setActivePokemon={setActivePokemon}
                activePokemon={activePokemon}
                key={pokemon.id}
              />
            );
          })}
      </Styled.PokemonsList>
      {!!data.length && !filterType && (
        <Button
          color="primary"
          variant="contained"
          size="large"
          sx={{ width: "100%" }}
          onClick={() => setOffset(data.length)}
        >
          {loading ? (
            <CircularProgress size={26} color="inherit" />
          ) : (
            "Load More"
          )}
        </Button>
      )}
    </Styled.Container>
  );
};

export default PokemonsList;
