import React from "react";
import { Box, Text } from "../";
import { Image } from "./";
import { smad64, teapot64 } from "../../constants";

export default {
  title: "Primitives/Image",
  component: Image,
  parameters: {
    docs: {
      description: {
        component:
          "The Image component gives us control over the aspect-ratio at which the supplied image will be displayed. Neat, right? The [aspect-ratio property](https://caniuse.com/?search=aspect-ratio) has broad support!",
      },
    },
  },
};

export const Basic = (args: any) => (
  <div style={{ maxWidth: "30vw" }}>
    <Image {...args} src={teapot64} alt="Teapot" />
  </div>
);
Basic.args = { ratio: "3/2" };

export const Boxed = (args: any) => (
  <div style={{ maxWidth: "30vw" }}>
    <Box padding={0} borderWidth="0.25rem" borderRadius="medium">
      <Image {...args} src={smad64} alt="Strong Mad" />
      <Box borderWidth="0">
        <Text variant="body">Strong Mad!</Text>
      </Box>
    </Box>
  </div>
);
Boxed.args = { ratio: "16/9" };
