import React from "react";
import styled, { useTheme } from "styled-components";
import { sigil, reactRenderer } from "@tlon/sigil-js";
import { Box, Flex, Frame, Sigil as GivenSigil, Stack, Text } from "../";
import { formatMinutesSince } from "../../utilities";

type PostProps = {
  body: string;
  channel: string;
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
            <Text variant="patp">~{props.patp}</Text>
            <Text variant="detail">
              {formatMinutesSince(props.minutesSincePosted)}
              {" \u00B7 "}
              <span style={{ fontWeight: "bold" }}>#{props.channel}</span>
            </Text>
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
const Sigil = (props: SigilProps) => {
  const theme = useTheme();
  return (
    <div style={{ maxWidth: "4rem", maxHeight: "4rem" }}>
      <Box borderWidth="0" borderRadius="medium" padding="0">
        {sigil({
          patp: props.patp,
          renderer: reactRenderer,
          class: "sigil",
          size: 48,
          colors: props?.colors || ["#242", "white"],
        })}
      </Box>
    </div>
  );
};
