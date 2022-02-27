import React from "react";
import styled from "styled-components";

export type StackProps = {
  space: string
};

export const Stack: any = styled.div<StackProps>`
  display: flex;
  flex-direction: column;

  /* This is from every-layout.dev; they call it the "owl selector." 
  * All it means is: "For each direct child which follows another sibling,
  * add some top margin." */

  & > * + * {
    margin-top: ${props => props.space};
  }

  /* Every-layout also suggests adding a boolean \`recursive\` prop which
  * applies consistent vertical spacing to children at any nesting depth. I've
  * omitted it here because we don't need it, but it only omits the 
  * direct descendant selector \`>\`: 
  & * + * {
    margin-top: (props => props.space);
  }
  */
`;

Stack.defaultProps = {
  space: "1rem",
}
