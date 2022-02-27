import React from "react";

import { Box } from "./Box";
import { Text } from "..";

export default {
  title: "Primitives/Box",
  component: Box,
  parameters: {
    docs: {
      description: {
        component:
          "The Box has one extremely simple remit: Visually separating some element of the page from another. It provides a border, some padding, and possibly a background for its children. It makes no decisions about the size, position, or layout of the children themselves: that responsibility belongs to the context in which the Box appears.",
      },
    },
  },
};

export const Basic = (args: any) => (
  <Box {...args}>
    <Text>This is a default box</Text>
  </Box>
);

Basic.args = Box.defaultProps;
