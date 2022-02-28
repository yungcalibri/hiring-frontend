import React from "react";

import { Flex } from "./Flex";
import { Box, Text } from "../";

export default {
  title: "Components/Flex",
  component: Flex,
  parameters: {
    docs: {
      description: {
        component:
          "The Flex component is only a convenient way to invoke the frequently-used flexbox layout.",
      },
    },
  },
  argTypes: {
    flexDirection: {
      control: "select",
      options: ["row", "row-reverse", "column", "column-reverse"],
    },
    justifyContent: {
      control: "select",
      options: [
        "center",
        "start",
        "end",
        "space-between",
        "space-around",
        "space-evenly",
        "stretch",
      ],
    },
    alignItems: {
      control: "select",
      options: [
        "center",
        "start",
        "end",
        "space-between",
        "space-around",
        "space-evenly",
        "stretch",
        "baseline",
      ],
    },
  },
};

export const Basic = (args: any) => (
  <Flex {...args}>
    <Box bg="text.primary" p={3}>
      <Text variant="body" color="text.inverse">
        This is a flex box item
      </Text>
    </Box>
    <Box bg="text.primary" p={3}>
      <Text variant="body" color="text.inverse">
        This is a flex box item
      </Text>
    </Box>
  </Flex>
);

Basic.args = {
  gap: "1rem",
};
