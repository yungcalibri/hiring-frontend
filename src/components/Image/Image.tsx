import React from "react";
import styled from 'styled-components';

type FrameProps = {
  ratio: string,
};

const Frame = styled.div<FrameProps>`
  aspect-ratio: ${props => props.ratio};
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  & > img {
    inline-size: 100%;
    block-size: 100%;
    object-fit: cover;
  }
`;

type ImageProps = FrameProps & {
  alt: string,
  src: string,
  srcset?: string,
};

export const Image: any = (props: ImageProps) => {
  const { ratio, ...imgProps } = props
  return (
    <Frame ratio={props.ratio}>
      <img {...imgProps }/>
    </Frame>
  );
};
