import { CircularProgress } from "@mui/material";

import Autocomplete from "../../../UI/Autocomplete";

import * as Styled from "./Toolbar.styled";

type ToolbarProps = {
  loading: boolean;
  setOffset: React.Dispatch<React.SetStateAction<number>>;
  setType: React.Dispatch<React.SetStateAction<string | undefined>>;
};

const Toolbar: React.FC<ToolbarProps> = ({ loading, setType, setOffset }) => {
  return (
    <Styled.Toolbar>
      <Styled.Title variant="h2">Pokedex</Styled.Title>
      <Styled.Filters>
        {loading && <CircularProgress size={25} color="primary" />}
        <Autocomplete setType={setType} setOffset={setOffset} />
      </Styled.Filters>
    </Styled.Toolbar>
  );
};

export default Toolbar;
