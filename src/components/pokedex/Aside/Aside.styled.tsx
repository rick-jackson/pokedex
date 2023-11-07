import styled from "styled-components";
import { theme } from "../../../theme";
import { Card } from "@mui/material";
import MuiTableCell from "@mui/material/TableCell";

export const Aside = styled.aside`
  width: 30%;
  display: flex;
  position: relative;

  ${theme.breakpoints.down("lg")} {
    width: 40%;
  }

  ${theme.breakpoints.down("md")} {
    width: 60%;
  }

  ${theme.breakpoints.down("sm")} {
    width: calc(100% - 25px);
    position: fixed;
    top: calc(50% - 320px);
  }
`;

export const PokemonCard = styled(Card)`
  position: sticky;
  top: calc(50vh - 340px);
  width: 100%;
  height: fit-content;
  max-height: calc(100vh - 20px);
  display: flex;
  flex-direction: column;
  overflow: auto !important;

  ${theme.breakpoints.down("sm")} {
    max-height: calc(100vh - 50px);
    img {
      height: 150px;
    }
  }
`;

export const TableCell = styled(MuiTableCell)`
  border: 1px solid rgba(224, 224, 224, 1);
`;
