import React, { useContext } from "react";
import { AppContext } from "../../StateProvider";
import { Flex, Post, Stack, Text } from "../";

export const Feed = (props) => {
  const { likes, loadPosts, postOrder, posts } = useContext(AppContext);
  return (
    <Stack>
      {postOrder.map((id) => (
        <Post key={id} liked={likes.has(id)} {...posts.get(id)} />
      ))}
      <Flex justifyContent="center">
        <button type="button" onClick={() => loadPosts()}>
          <Text variant="body">Load More</Text>
        </button>
      </Flex>
    </Stack>
  );
};
