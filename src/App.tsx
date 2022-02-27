import React, { FC } from "react";
import { ThemeProvider } from "styled-components";
import { Box, Text } from "./components";
import { Home } from "./layouts";
import theme from "./theme";

type AppProps = {
  //
};

export const App: FC<AppProps> = () => {
  return (
    <ThemeProvider theme={theme.light}>
      <Home>
        <Box>
          <Text>Let's put the posts here.</Text>
        </Box>
      </Home>
    </ThemeProvider>
  );
};
