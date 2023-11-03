import { useEffect, useState } from "react";
import ToDo from "./ToDo.js";
import Comment from "./Comment.js";
import PostList from "./PostList.js";
import Post from "./Post.js";

function App() {
  // Uztaisi stāvokļa mainīgo toDo
  const [toDo, setToDo] = useState({});
  const [komentars, setKomentars] = useState({});
  const [loading, setLoading] = useState(true);
  const [postList, setPostList] = useState({});

  useEffect(() => {
    async function getToDo() {
      const response1 = await fetch(
        "https://jsonplaceholder.typicode.com/todos/4"
      );
      const response2 = await fetch(
        "https://jsonplaceholder.typicode.com/comments/1"
      );
      const response3 = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data1 = await response1.json();
      const data2 = await response2.json();
      const data3 = await response3.json();
      setToDo(data1);
      setKomentars(data2);
      setLoading(false);
      setPostList(data3);
    }
    getToDo();
  }, []);

  // const toDo = {
  //   userId: 1,
  //   id: 1,
  //   title: "delectus aut autem",
  //   completed: false,
  // };

  return (
    <>
      {loading ? <p>Loading...</p> : <ToDo {...toDo} />}
      {loading ? <p>Loading...</p> : <Comment {...komentars} />}
      {loading ? <p>Loading...</p> : <PostList {...postList} />}
      {loading ? <p>Loading...</p> : <Post />}
    </>
  );
}

export default App;
