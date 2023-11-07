import styled from "styled-components";
import Typography from "@mui/material/Typography";
import { theme } from "../../../../theme";

export const Toolbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled(Typography)`
  display: flex;
  align-items: center;

  ${theme.breakpoints.down("md")} {
    font-size: 1.75rem !important;
    img {
      width: 50px;
      height: 50px;
    }
  }
`;

export const Filters = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;
