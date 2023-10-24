import { CircularProgress } from "@mui/material";

import Autocomplete from "../../../UI/Autocomplete";

import * as Styled from "./Toolbar.styled";

type ToolbarProps = {
  loading: boolean;
  setFilterType: React.Dispatch<React.SetStateAction<string>>;
};

const Toolbar: React.FC<ToolbarProps> = ({ loading, setFilterType }) => {
  return (
    <Styled.Toolbar>
      <Styled.Title variant="h2">Pokedex</Styled.Title>
      <Styled.Filters>
        {loading && <CircularProgress size={25} color="primary" />}
        <Autocomplete setFilterType={setFilterType} />
      </Styled.Filters>
    </Styled.Toolbar>
  );
};

export default Toolbar;
