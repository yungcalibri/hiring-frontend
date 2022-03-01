import styled from "styled-components";
import { flexbox, FlexboxProps } from "styled-system";

export type FlexProps = FlexboxProps & { gap?: number };

export const Flex: any = styled.div<FlexProps>(
  {
    display: "flex",
    gap: (props) => props.gap,
    // TODO add gap props or research and document usages
  },
  flexbox
);

Flex.defaultProps = {
  gap: "1rem",
};
