import {
  Box,
  CardActionArea,
  Chip,
  CardMedia,
  CardContent,
  Card,
} from "@mui/material";

import type { Pokemon } from "../../../entities/pokemon";
import { capitalizeFirstLetter } from "../../../common/utils/getLabelText";
import { TYPE_LABELS_COLORS } from "../../../common/data/labelsColors";

import * as Styled from "./PokemonCard.styled";

type PokemonCardProps = {
  data: Pokemon;
  activePokemon: Pokemon | null;
  setActivePokemon: React.Dispatch<React.SetStateAction<Pokemon | null>>;
};

const PokemonCard: React.FC<PokemonCardProps> = ({
  data,
  activePokemon,
  setActivePokemon,
}) => {
  const {
    name,
    sprites: { other },
    types,
  } = data;

  const handleClick = () => {
    setActivePokemon(activePokemon?.id === data.id ? null : data);
  };

  return (
    <Card
      sx={{ maxHeight: "236px" }}
      onClick={handleClick}
      raised={activePokemon?.id === data.id}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={other["official-artwork"]["front_default"]}
          alt={name}
          sx={{ objectFit: "contain" }}
        />
        <CardContent>
          <Styled.PokemonName gutterBottom variant="h5" component="div">
            {capitalizeFirstLetter(name)}
          </Styled.PokemonName>
          <Box sx={{ display: "flex", gap: "8px" }}>
            {types.map(({ type: { name } }) => (
              <Chip
                sx={{
                  minWidth: "70px",
                  background: TYPE_LABELS_COLORS[name],
                  color: "#fff",
                }}
                size="small"
                label={capitalizeFirstLetter(name)}
                key={name}
              />
            ))}
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default PokemonCard;
