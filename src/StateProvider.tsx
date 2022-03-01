import React, { useCallback, useEffect, useState } from "react";
import { diglett64, smad64, teapot64 } from "./constants";
import { makePatp } from "./utilities";

const noop = (..._params) => undefined;

const images = [diglett64, smad64, teapot64];

const loadPosts = async (page) => {
  // enforced delay to show loading state
  await new Promise((resolve) => setTimeout(resolve, 1500));

  // construct query url
  const queryParams = new URLSearchParams({
    quantity: "5",
    // use the page number as a random seed to get consistent results
    seed: page,
    hasImage: "boolean",
    // selects which of our three images will be applied
    imageSelector: "number",
    minutesSincePosted: "number",
    content: "text",
    id: "uuid",
    // user 'already liked' this post
    liked: "boolean",

    // syllables of the poster's @p
    syl3: "number",
    syl2: "number",
    syl1: "number",
    syl0: "number",
  });
  const queryUrl = new URL(
    "https://fakerapi.it/api/v1/custom?" + queryParams.toString()
  );

  // fetch posts
  const res = await fetch(queryUrl.toString());
  const retrieved = await res.json();

  // derive patp from post user id
  const withPatp = retrieved.map((raw: any) => {
    const { syl3, syl2, syl1, syl0, ...data } = raw;
    return {
      ...data,
      patp: makePatp([
        [syl3, syl2],
        [syl1, syl0],
      ]),
    };
  });

  // select image for applicable posts
  const withImage = withPatp.map((post: any) => {
    const { hasImage, imageSelector, ...data } = post;
    if (!hasImage) {
      return { ...data };
    }
    const imageIndex = imageSelector % 3;
    return { ...data, image: images[imageIndex] };
  });

  return withImage;
};

const AppContext = React.createContext({
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
    loadPosts,
    loadingPosts: true,
  });

  useEffect(() => {
    let waiting = true;

    const { page, postOrder, posts } = state;
    loadPosts(state.page).then((result) => {
      if (!waiting) {
        setState((a) => ({ ...a, loadingPosts: false }));
      }

      const newPostOrder = [...postOrder, ...result.map((p) => p.id)];
      const postsById = result.map((p) => [p.id, p]);
      const newPosts = new Map(posts);
      postsById.forEach(([id, p]) => newPosts.set(id, p));

      setState((prev) => ({
        ...prev,
        page: page + 1,
        posts: newPosts,
        postOrder: newPostOrder,
        loadingPosts: false,
      }));
    });
    return () => {
      waiting = false;
    };
  }, []);

  const toggleLike = useCallback((postId) => {
    const { likes, posts } = state;
    if (!posts.has(postId)) {
      return;
    }
    const newLikes = likes.add(postId);
    setState((prev) => ({ ...prev, likes: newLikes }));
  }, []);

  // sorry, this is a hack, but I'm too tired to think through a better way
  useEffect(() => {
    setState((prev) => ({ ...prev, toggleLike }));
  }, []);

  return (
    <AppContext.Provider value={state}>{props.children}</AppContext.Provider>
  );
};
