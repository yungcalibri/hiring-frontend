import React from "react";
import { Frame, FrameProps } from "../";

type ImageProps = FrameProps & {
  alt: string;
  src: string;
  srcset?: string;
};

export const Image: any = (props: ImageProps) => {
  const { ratio, ...imgProps } = props;
  return (
    <Frame ratio={props.ratio}>
      <img {...imgProps} />
    </Frame>
  );
};
