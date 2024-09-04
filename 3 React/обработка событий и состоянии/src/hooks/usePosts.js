import { useMemo } from "react";

const useSortedPosts = (posts, sort) => {
  return useMemo(() => {
    if (sort) {
      return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]));
    }
    return posts;
  }, [sort, posts]);
};
export const usePosts = (posts, sort, search) => {
  const sortedPosts = useSortedPosts(posts, sort);
  return useMemo(() => {
    return sortedPosts.filter((post) => {
      return post.title.toLowerCase().includes(search.toLowerCase());
    });
  }, [search, sortedPosts]);
};
