import React, { FC } from "react";
import styled from "styled-components";

type HomeProps = {};

const HomeRoot = styled.div`
  min-height: 80vh;
  display: grid;
  grid-gap: 1ch;
  grid-auto-rows: auto;
  grid-template-columns:
    minmax(0, 1fr) minmax(min-content, 80ch) minmax(0, 1fr);
  & > * {
    grid-column: 2 / -2;
  }
`;

export const Home: FC<HomeProps> = (props) => {
  return (
    <HomeRoot>
      {props.children}
    </HomeRoot>
  );
};
