import React, { useContext, FC } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { AppContext, StateProvider } from "./StateProvider";
import { Box, Feed, Text } from "./components";
import { Home } from "./layouts";
import theme from "./theme";

type AppProps = {
  //
};

// would prefer to disable strict mode here but I can't
const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  :root {
    --default-transition: ${(props) => props.theme.transition || "0.1s ease"};
    --dtx: var(--default-transition); /* shorthand */
    --fast-transition: ${(props) => props.theme.transitionFast || "0.05s ease"};
    --ftx: var(--fast-transition);

    --border-color: ${(props) =>
      props.theme.colors.ui.borderColor || "currentColor"};
    --border-hover-color: ${(props) =>
      props.theme.colors.ui.borderHover || "currentColor"};
    --border-width: ${(props) => props?.borderWidths?.[0] || "0.125rem"};
    ${(props) =>
      Object.entries(props.theme.radii)
        .map(([k, v]) => `--border-radius-${k}: ${v}`)
        .join(";")}
    --border-radius: var(--border-radius-small, 0.25ch);

    --hover-drop-shadow: drop-shadow(0 0.5ex 0.25ex var(--border-hover-color));
    --active-drop-shadow: drop-shadow(0 0.25ex 0.125ex var(--border-hover-color));
  }

  body {
    color: ${(props) => props.theme.colors.text.primary};
    background: ${(props) => props.theme.colors.bg.primary};
  }

  button {
    appearance: none;
    background: var(--button-background, lightsteelblue);
    border-width: var(--border-width, 0.125ch);
    border-color: var(--border-color, currentColor);
    border-radius: var(--border-radius, 0.25ch);
    padding-inline: var(--button-padding-inline, 1ch);
    padding-block: var(--button-padding-block, 0.5ch);
    transition: var(--dtx);

    &:hover {
      filter: var(--hover-drop-shadow);
    }
    &:active {
      filter: var(--active-drop-shadow) brightness(95%);
    }

    &.transparent {
      --button-background: ${(props) => props.theme.colors.bg.primary};
      --border-width: 0.25ch;
    }
    &.fixed-width {
      min-width: 8ch;
    }
  }
`;

export const App: FC<AppProps> = () => {
  return (
    <ThemeProvider theme={theme.light}>
      <GlobalStyle />
      <StateProvider>
        <Home>
          <Feed />
        </Home>
      </StateProvider>
    </ThemeProvider>
  );
};
