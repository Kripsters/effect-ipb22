import { useEffect, useState } from "react";
import Post from "./Post.js";

function PostList(props) {
  //    props.postList.map((individs, index) => {
  //        return <Post content={individs} num={index}/>;
  //    });

  useEffect(() => {
    console.log("cauacu");
  });
  return (
    <>
      <br></br>
      <p>Hi from PostList</p>
    </>
  );
}

export default PostList;
