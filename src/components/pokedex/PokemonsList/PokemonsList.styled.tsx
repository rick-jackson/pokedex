import styled from "styled-components";
import { Button, ButtonTypeMap, ExtendButtonBase } from "@mui/material";
import { theme } from "../../../theme";

export const Container = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  gap: 12px;

  ${theme.breakpoints.down("lg")} {
    width: 60%;
  }

  ${theme.breakpoints.down("md")} {
    width: 40%;
  }

  ${theme.breakpoints.down("sm")} {
    width: 100%;
  }
`;

export const PokemonsList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  margin: auto;
  width: 100%;

  ${theme.breakpoints.down("lg")} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${theme.breakpoints.down("md")} {
    grid-template-columns: repeat(1, 1fr);
  }

  ${theme.breakpoints.down("sm")} {
    grid-template-columns: repeat(2, 1fr);
  }
`;
