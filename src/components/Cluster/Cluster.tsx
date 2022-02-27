import React from "react";
import styled from "styled-components";
import { flexbox, FlexboxProps, variant } from "styled-system";

type ClusterProps = FlexboxProps & { gap: string };

export const Cluster: any = styled.div<ClusterProps>(
  {
    display: "flex",
    flexWrap: "wrap",
    gap: (props: ClusterProps) => props.gap,
  },
  flexbox,
  variant({
    prop: "dir",
    variants: {
      rtl: {
        flexDirection: "row-reverse",
      },
    },
  })
);

Cluster.defaultProps = {
  gap: "1rem",
};
