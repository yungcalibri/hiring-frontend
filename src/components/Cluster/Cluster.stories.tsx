import React from "react";
import { alphabet } from "../../constants";
import { Box, Text } from "../";
import { Cluster } from "./Cluster";

export default {
  title: "Primitives/Cluster",
  component: Cluster,
  parameters: {
    docs: {
      description: {
        component:
          "The Cluster creates a wrappable list of items, separated from one another by some space, which is configured via the gap prop. When the context provides enough space, its children appear all in one row. When the space is not sufficient, the children will wrap to fit.",
      },
    },
  },
};

const Template: any = ({ alphabetEntries = 8, ...args }: any) => (
  <Cluster {...args}>
    {alphabet.slice(0, alphabetEntries).map((entry) => (
      <Box key={entry}>
        <Text variant="body">{entry}</Text>
      </Box>
    ))}
  </Cluster>
);

export const Basic = Template.bind({});
Basic.args = {
  ...Cluster.defaultProps,
  alphabetEntries: 12,
};
