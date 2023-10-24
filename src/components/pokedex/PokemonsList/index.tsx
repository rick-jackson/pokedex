import { Button, CircularProgress } from "@mui/material";

import type { Pokemon, PokemonItem } from "../../../entities/pokemon";
import PokemonCardSkeleton from "../PokemonCard/Skeleton";
import PokemonCard from "../PokemonCard";
import Toolbar from "./Toolbar";

import * as Styled from "./PokemonsList.styled";

type PokemonsListProps = {
  setActivePokemon: React.Dispatch<React.SetStateAction<Pokemon | null>>;
  pokemonsData: Array<Partial<Pokemon> & Partial<PokemonItem>>;
  loading: boolean;
  activePokemon: Pokemon | null;
  setOffset: React.Dispatch<React.SetStateAction<number>>;
  setType: React.Dispatch<React.SetStateAction<string | undefined>>;
};

const PokemonsList: React.FC<PokemonsListProps> = ({
  setActivePokemon,
  pokemonsData,
  loading,
  activePokemon,
  setOffset,
  setType,
}) => {
  return (
    <Styled.Container>
      <Toolbar loading={loading} setType={setType} setOffset={setOffset} />
      <Styled.PokemonsList>
        {pokemonsData.map((pokemon) => {
          if (loading && pokemon.url)
            return <PokemonCardSkeleton key={pokemon.url} />;

          if (pokemon.id) {
            return (
              <PokemonCard
                data={pokemon as Pokemon}
                setActivePokemon={setActivePokemon}
                activePokemon={activePokemon}
                key={pokemon.id}
              />
            );
          }
        })}
      </Styled.PokemonsList>
      {!!pokemonsData.length && (
        <Button
          color="primary"
          variant="contained"
          size="large"
          sx={{ width: "100%" }}
          onClick={() => setOffset(pokemonsData.length)}
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
