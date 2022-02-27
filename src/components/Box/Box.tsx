import styled from "styled-components";
import {
  compose,
  space,
  border,
  color,
  SpaceProps,
  ColorProps,
  BorderProps,
} from "styled-system";

export type BoxProps = SpaceProps & ColorProps & BorderProps;

export const Box: any = styled.div<BoxProps>(compose(space, color, border));

Box.defaultProps = {
  borderColor: "ui.borderColor",
  borderRadius: "small",
  borderStyle: "solid",
  borderWidth: "0.125rem",
  padding: "1rem",
};
