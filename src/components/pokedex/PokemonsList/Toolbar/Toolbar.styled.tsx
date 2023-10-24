import styled from "styled-components";
import Typography from "@mui/material/Typography";
import { theme } from "../../../../theme";

export const Toolbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled(Typography)`
  text-align: center;

  ${theme.breakpoints.down("md")} {
    font-size: 1.75rem !important;
  }
`;

export const Filters = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;
