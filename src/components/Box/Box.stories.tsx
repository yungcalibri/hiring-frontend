import React from "react";

import { Description, Props, Title } from "@storybook/addon-docs/blocks";

import { Box } from "./Box";
import { Text } from "..";

export default {
  title: "Components/Box",
  component: Box,
  parameters: {
    docs: {
      description: {
        component:
          "The Box has an extremely simple remit: It provides a border and some padding to its children.",
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
