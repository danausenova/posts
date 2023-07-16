import React, { useEffect } from "react";
import PostItem from "./PostItem";
import { usePostContext } from "../context/PostContext";

const PostList = () => {
  const { posts, getPosts } = usePostContext();
  useEffect(() => {
    setTimeout(() => {
      getPosts();
    }, 500);
  }, []);
  return (
    <div>
      {posts.length > 0 ? (
        posts.map((item) => <PostItem item={item} key={item.id} />)
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};

export default PostList;
