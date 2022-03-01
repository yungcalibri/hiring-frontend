import React, { useEffect, useMemo, useState } from "react";

const noop = () => undefined;

const queryUrl = new URL("https://fakerapi.it/api/v1/custom");
const queryParams = new URLSearchParams({
  image: "boolean",
  // selects which of our three images will be applied
  imageSelector: "number",
  minutesSincePosted: "number",
  content: "text",
  id: "uuid",

  // syllables of the poster's @p
  syl0: "number",
  syl1: "number",
  syl2: "number",
  syl3: "number",
});

const query = new URL(queryUrl.toString() + queryParams.toString());

const loadPosts = async () => {
  // enforced delay to show loading state
  await new Promise((resolve) => setTimeout(resolve, 1500));
  // fetch posts
  // derive patp and sigil from post user id
  // select image for applicable posts
  return true;
};

const AppContext = React.createContext({
  posts: new Map(),
  postOrder: [],
  likes: new Set(),
  loadPosts: noop,
  loadingPosts: true,
});

export const StateProvider = (props: any) => {
  const [posts, setPosts] = useState(new Map());
  const [postOrder, setPostOrder] = useState([]);
  const [likes, setLikes] = useState(new Set());
  const [loadingPosts, setLoadingPosts] = useState(true);

  const state = useMemo(
    () => ({
      posts,
      postOrder,
      likes,
      loadPosts,
      loadingPosts,
    }),
    [posts, likes, loadingPosts]
  );

  useEffect(() => {
    let waiting = true;
    loadPosts().then(() => {
      if (waiting) {
        setPosts(posts);
      }
    });
    return () => {
      waiting = false;
    };
  }, []);

  return (
    <AppContext.Provider value={state}>{props.children}</AppContext.Provider>
  );
};
