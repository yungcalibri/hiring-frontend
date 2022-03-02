import React, { useCallback, useEffect, useState } from "react";
import { alphabet, diglett64, smad64, teapot64 } from "./constants";
import { makePatp } from "./utilities";

const noop = (..._params) => undefined;

const images = [diglett64, smad64, teapot64];

const loadPosts = async () => {
  // enforced delay to show loading state
  await new Promise((resolve) => setTimeout(resolve, 1500));

  // construct query url
  const queryParams = new URLSearchParams({
    ["_quantity"]: "5",
    // select a channel from the list
    channelIndex: "number",
    hasImage: "boolean",
    // selects which of our three images will be applied
    imageSelector: "number",
    minutesSincePosted: "number",
    body: "text",
    id: "uuid",

    // number of likes from other users
    likes: "number",

    // syllables of the poster's @p
    syl3: "number",
    syl2: "number",
    syl1: "number",
    syl0: "number",
  });
  const queryUrl =
    "https://fakerapi.it/api/v1/custom?" + queryParams.toString();

  // fetch posts
  const res = await fetch(queryUrl);
  const retrieved = await res.json();

  // derive patp from post user id
  const withPatp = retrieved.data.map((raw: any) => {
    const { syl3, syl2, syl1, syl0, ...data } = raw;
    return {
      ...data,
      patp: makePatp([
        [syl3, syl2],
        [syl1, syl0],
      ]),
    };
  });

  const withChannel = withPatp.map((post: any) => {
    const { channelIndex, ...data } = post;
    return { ...data, channel: alphabet[channelIndex % 26] };
  });

  // select image for applicable posts
  const withImage = withChannel.map((post: any) => {
    const { hasImage, imageSelector, ...data } = post;
    if (!hasImage) {
      return { ...data };
    }
    const imageIndex = imageSelector % 3;
    return { ...data, image: images[imageIndex] };
  });

  return withImage.map((post) => ({
    ...post,
    likes: post.likes % 1000, // no more than 1000 likes
    minutesSincePosted: post.minutesSincePosted % 10000, // no more than 10000 minutes since post
  }));
};

export const AppContext = React.createContext({
  page: 0,
  posts: new Map(),
  postOrder: [],
  likes: new Set(),
  toggleLike: noop,
  loadPosts: noop,
  loadingPosts: true,
});

export const StateProvider = (props: any) => {
  const [state, setState] = useState({
    page: 0,
    posts: new Map(),
    postOrder: [],
    likes: new Set(),
    toggleLike: noop,
    loadPosts: () => setState((prev) => ({ ...prev, page: prev.page + 1 })),
    loadingPosts: true,
  });

  useEffect(() => {
    let waiting = true;

    const { postOrder, posts } = state;
    loadPosts().then((result) => {
      if (!waiting) {
        setState((a) => ({ ...a, loadingPosts: false }));
      }

      const newPostOrder = [...postOrder, ...result.map((p) => p.id)];
      const postsById = result.map((p) => [p.id, p]);
      const newPosts = new Map(posts);
      postsById.forEach(([id, p]) => newPosts.set(id, p));

      setState((prev) => ({
        ...prev,
        posts: newPosts,
        postOrder: newPostOrder,
        loadingPosts: false,
      }));
    });
    return () => {
      waiting = false;
    };
  }, [state.page]);

  const toggleLike = (postId) => {
    const { likes, posts } = state;
    if (likes.has(postId)) {
      likes.delete(postId);
      setState((prev) => ({ ...prev, likes }));
      return;
    }
    likes.add(postId);
    setState((prev) => ({ ...prev, likes }));
  };

  // sorry, this is a hack, but I'm too tired to think through a better way
  useEffect(() => {
    setState((prev) => ({ ...prev, toggleLike }));
  }, []);

  return (
    <AppContext.Provider value={state}>{props.children}</AppContext.Provider>
  );
};
