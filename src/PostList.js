import { useEffect, useState } from "react";
import Post from "./Post.js";

function PostList() {
  const [allPosts, setAllPosts] = useState([]);
  useEffect(() => {
    async function getPosts() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      setAllPosts(data);
    }
    getPosts();
  }, []);
  const allPostSJSX = allPosts.map((post, index) => {
    return (
      <>
        <br />
        <Post key={index} {...post} />
        <br />
      </>
    );
  });

  return (
    <>
      <br></br>
      {allPostSJSX}
    </>
  );
}

export default PostList;
