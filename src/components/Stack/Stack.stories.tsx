import React from "react";
import { Box, Text } from "../";
import { Stack } from "./";
import { alphabet } from "../../constants";

export default {
  title: "Primitives/Stack",
  component: Stack,
  parameters: {
    docs: {
      description: {
        component:
          "The Stack is responsible for one thing only: Putting vertical space between children. Again, it doesn't make any more complex layout or styling decisions; its sole domain is the visual relationship between its children.",
      },
    },
  },
}

export const Basic = (args: any) => (
  <Stack {...args}>
    {alphabet.slice(0, 8).map(entry => (<Box key={entry}><Text variant="body">{entry}</Text></Box>))}
  </Stack>
);

Basic.args = Stack.defaultProps;
