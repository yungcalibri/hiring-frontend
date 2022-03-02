import React from "react";
import { useTheme } from "styled-components";
import { sigil, reactRenderer } from "@tlon/sigil-js";
import { Box, Flex, Frame, Sigil as GivenSigil, Stack, Text } from "../";
import { formatMinutesSince } from "../../utilities";

type PostProps = {
  body: string;
  channel: string;
  id: string;
  image: string;
  liked: boolean;
  likes: number;
  toggleLike: Function;
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
  const toggleLike = () => props.toggleLike(props.id);
  return (
    <Flex justifyContent="space-between" alignItems="center">
      {/* Author, channel, time since post */}
      <Flex>
        <Sigil patp={props.patp} colors={["#232", "#FED"]} />
        <Box borderWidth="0" padding="0.5ch">
          <Stack space="0.5ch">
            <Text variant="patp">~{props.patp}</Text>
            <Text variant="detail">
              Via <span style={{ fontWeight: "bold" }}>#{props.channel}</span>
              {" \u00B7 "}
              {formatMinutesSince(props.minutesSincePosted)}
            </Text>
          </Stack>
        </Box>
      </Flex>
      {/* Like button */}
      <button onClick={toggleLike} className="transparent fixed-width">
        <Text variant="detail">{props.likes + (props.liked ? 1 : 0)}</Text>
      </button>
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
