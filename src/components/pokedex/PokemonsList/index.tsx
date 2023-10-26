import { useState } from "react";
import { Button, CircularProgress, Typography } from "@mui/material";

import type { Pokemon } from "../../../entities/pokemon";
import useDataFetching from "../../../common/hooks/useDataFetching";
import PokemonCardSkeleton from "../PokemonCard/Skeleton";
import PokemonCard from "../PokemonCard";
import Toolbar from "./Toolbar";
import Error from "../../Error";

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

  if (error) return <Error error={error} />;

  const pokemons = data
    .filter((pokemon) => {
      if (!pokemon?.id || !filterType) return pokemon;
      return pokemon.types?.map(({ type }) => type.name).includes(filterType);
    })
    .map((pokemon) => {
      if (loading && !pokemon?.id)
        return <PokemonCardSkeleton key={pokemon.url} />;
      return (
        <PokemonCard
          data={pokemon as Pokemon}
          setActivePokemon={setActivePokemon}
          activePokemonId={activePokemon?.id}
          key={pokemon.id}
        />
      );
    });

  return (
    <Styled.Container>
      <Toolbar loading={loading} setFilterType={setFilterType} />
      <Styled.PokemonsList>
        {pokemons}
        {!pokemons.length && !loading && (
          <Typography>No povemons were found for your request</Typography>
        )}
      </Styled.PokemonsList>
      {!!data.length && (
        <Button
          color="primary"
          variant="contained"
          size="large"
          sx={{ width: "100%", marginTop: "auto" }}
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
