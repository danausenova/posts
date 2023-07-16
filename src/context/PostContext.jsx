import React, { createContext, useContext, useState } from "react";
import { API } from "../utils/consts";
import axios from "axios";

const postContext = createContext();
export const usePostContext = () => useContext(postContext);
const PostContext = ({ children }) => {
  const [posts, setPosts] = useState([]);
  async function getPosts() {
    const { data } = await axios(API);
    console.log(data);
    setPosts(data);
  }
  const value = { posts, getPosts };
  return <postContext.Provider value={value}>{children}</postContext.Provider>;
};

export default PostContext;
