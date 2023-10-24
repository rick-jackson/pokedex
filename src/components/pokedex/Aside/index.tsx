import {
  useMediaQuery,
  CardContent,
  Typography,
  CardMedia,
  TableBody,
  TableRow,
  Table,
  IconButton,
} from "@mui/material";

import type { Pokemon } from "../../../entities/pokemon";
import { capitalizeFirstLetter } from "../../../common/utils/getLabelText";
import { snakeToCamel } from "../../../common/utils/getCamelCaseText";
import { SKILLS_LABELS } from "../../../common/data/skillsLabels";
import { theme } from "../../../theme";

import * as Styled from "./Aside.styled";

type AsideProps = {
  activePokemon: Pokemon | null;
};

const Aside: React.FC<AsideProps> = ({ activePokemon }) => {
  const typesString = activePokemon?.types.map(({ type }) =>
    capitalizeFirstLetter(type.name)
  );

  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Styled.Aside>
      {matches && (
        <IconButton
          sx={{
            position: "absolute",
            top: 0,
            right: 0,
            zIndex: 1,
            transform: "rotate(45deg)",
          }}
        >
          +
        </IconButton>
      )}
      {activePokemon && (
        <Styled.PokemonCard>
          <CardMedia
            component="img"
            height="200"
            image={
              activePokemon.sprites.other["official-artwork"]["front_default"]
            }
            alt={activePokemon.name}
            sx={{ objectFit: "contain" }}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h4"
              component="div"
              sx={{ textAlign: "center" }}
            >
              {capitalizeFirstLetter(activePokemon.name)}
            </Typography>
            <Table>
              <TableBody>
                <TableRow>
                  <Styled.TableCell align="center" component="th">
                    Type
                  </Styled.TableCell>
                  <Styled.TableCell
                    align="center"
                    component="th"
                    sx={{ width: "20%" }}
                  >
                    {/* 
                      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                      // @ts-ignore*/}
                    {typesString.join(", ")}
                  </Styled.TableCell>
                </TableRow>
                {activePokemon.stats.map(({ stat: { name }, base_stat }) => (
                  <TableRow key={name}>
                    <Styled.TableCell align="center" component="th">
                      {SKILLS_LABELS[snakeToCamel(name)]}
                    </Styled.TableCell>
                    <Styled.TableCell align="center" component="th">
                      {base_stat}
                    </Styled.TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Styled.PokemonCard>
      )}
    </Styled.Aside>
  );
};

export default Aside;
