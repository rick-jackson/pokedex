import type { Theme } from "@mui/system";
import type { ThemeProps } from "@mui/styled-engine-sc";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle<ThemeProps<Theme>>`
html, #root, body{
    min-height: 100vh;
    margin: 0;
    scrollbar-gutter: stable;
}

main {
    display: flex;
    flex-direction: column;
    width: 100%;
    flex: auto;
    min-height: 100vh;
    padding: 12px;
}

*{
    box-sizing: border-box;
}
 
`;

export default GlobalStyles;
