import React from "react";
import { ThemeProvider } from "styled-components";
import { Box } from "../src/components";
import { theme } from "../src/theme";

const ThemeDecorator = (storyFn: any) => (
  <>
    <ThemeProvider theme={theme.light}>
      <Box borderWidth="0" bg="bg.primary" mb={4}>
        {storyFn({ id: (id) => "light-" + id })}
      </Box>
    </ThemeProvider>
    <ThemeProvider theme={theme.dark}>
      <Box borderWidth="0" bg="bg.primary">
        {storyFn({ id: (id) => "dark-" + id })}
      </Box>
    </ThemeProvider>
  </>
);

export default ThemeDecorator;
