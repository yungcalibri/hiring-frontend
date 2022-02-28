import React, { FC } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { Box, Text } from "./components";
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

    --hover-drop-shadow: drop-shadow(0.5ch 0.5ch 0.25ch var(--border-hover-color));
    --active-drop-shadow: drop-shadow(0.25ch 0.25ch 0.125ch var(--border-hover-color));

    --border-color: ${(props) =>
      props.theme.colors.ui.borderColor || "currentColor"};
    --border-hover-color: ${(props) =>
      props.theme.colors.bg.divider || "currentColor"};
    --border-width: ${(props) => props?.borderWidths?.[0] || "0.125ch"};
    --border-radius: ${(props) => props?.borderRadii?.[0] || "0.25ch"};
  }

  body {
    color: ${(props) => props.theme.colors.text.primary};
  }

  button {
    appearance: none;
    background: var(--button-background, lightsteelblue);
    border-width: var(--border-width, 0.125ch);
    border-color: var(--border-color, currentColor);
    border-radius: var(--border-radius, 0.25ch);
    transition: var(--dtx);

    &:hover {
      filter: var(--hover-drop-shadow);
    }
    &:active {
      filter: var(--active-drop-shadow) brightness(95%);
    }

    &.transparent {
      --button-background: transparent;
      --border-width: 0.25ch;
    }
  }
`;

export const App: FC<AppProps> = () => {
  return (
    <ThemeProvider theme={theme.light}>
      <GlobalStyle />
      <Home>
        <Box>
          <Text>Let's put the posts here.</Text>
        </Box>
        <button
          type="button"
          className="transparent"
          onClick={() => console.log("click")}>
          click meeeeee
        </button>
      </Home>
    </ThemeProvider>
  );
};
