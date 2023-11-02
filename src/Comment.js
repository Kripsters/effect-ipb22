import { useEffect, useState } from "react";

function Comment(props) {
  return (
    <>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <p>postId: {props.postId}</p>
      <p>id: {props.id}</p>
      <p>name: {props.name}</p>
      <p>email: {props.email}</p>
      <p>body: {props.body}</p>
    </>
  );
}

export default Comment;
