import React from "react";
import styled from "styled-components";
import { sigil, reactRenderer } from "@tlon/sigil-js";
import { Box, Flex, Frame, Sigil as GivenSigil, Stack, Text } from "../";

type PostProps = {
  body: string;
  id: string;
  image: string;
  liked: boolean;
  minutesSincePosted: number;
  patp: string;
};

export const Post = (props: PostProps) => {
  return (
    <Box>
      <PostDetails {...props} />
      {/* post content */}
      {/* labels */}
    </Box>
  );
};

type PostDetailsProps = PostProps;

const PostDetails = (props: PostDetailsProps) => {
  return (
    <Flex justifyContent="space-between">
      {/* Author, channel, time since post */}
      <Flex>
        <Sigil patp={props.patp} colors={["#232", "#FED"]} />
        <Box borderWidth="0" padding="0.5ch">
          <Stack space="0.5ch">
            <Text variant="caption">~{props.patp}</Text>
            <Text variant="caption">Time Since Posted</Text>
          </Stack>
        </Box>
      </Flex>
      {/* Like button */}
    </Flex>
  );
};

type SigilProps = {
  patp: string;
  colors?: [string, string];
};
const Sigil = (props: SigilProps) => (
  <div style={{ maxWidth: "4rem", maxHeight: "4rem" }}>
    <Box borderWidth="0" borderRadius="medium" padding="0">
      {sigil({
        patp: props.patp,
        renderer: reactRenderer,
        size: 48,
        colors: props?.colors || ["#242", "white"],
      })}
    </Box>
  </div>
);
