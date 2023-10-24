import { Box } from "@mui/material";

import GlobalStyles from "./theme/GlobalStyles";
import Pokedex from "./components/pokedex";
import { theme } from "./theme";

const App: React.FC = () => (
  <Box component="main">
    <GlobalStyles theme={theme} />
    <Pokedex />
  </Box>
);

export default App;
