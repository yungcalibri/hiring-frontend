import React, { FC } from "react";
import { ThemeProvider } from "styled-components";
import { Text } from "./components";
import { Home } from "./layouts";
import theme from "./theme";

type AppProps = {
  //
};

export const App: FC<AppProps> = () => {
  return (
    <ThemeProvider theme={theme.light}>
      <Home>
        <Text>Let's put the posts here.</Text>
      </Home>
    </ThemeProvider>
  );
};
