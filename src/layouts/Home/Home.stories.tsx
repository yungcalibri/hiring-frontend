import React from "react";

import { Description, Props, Title } from "@storybook/addon-docs/blocks";

import { Home } from "../";
import { Flex } from "components/Flex";

export default {
  title: "Layouts/Home",
  component: Home,
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Description>
            The default layout for the homepage, with gutters.
          </Description>
          <Props of={Home} />
        </>
      )
    },
  },
}

const guys = ["Larry", "Curly", "Moe"];

export const Basic = () => (
  <Home>
    {guys.map(name => (
      <p style={{border: "1px solid red", marginBottom: "1em"}} key={name}>
        {name}
      </p>
    ))}
  </Home>
)
