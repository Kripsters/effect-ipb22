import { useEffect, useState } from "react";
import ToDo from "./ToDo.js";
import Comment from "./Comment.js";

function App() {
  // Uztaisi stāvokļa mainīgo toDo
  const [toDo, setToDo] = useState({});
  const [komentars, setKomentars] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getToDo() {
      const response1 = await fetch(
        "https://jsonplaceholder.typicode.com/todos/4"
      );
      const response2 = await fetch(
        "https://jsonplaceholder.typicode.com/comments/1"
      );
      const data1 = await response1.json();
      const data2 = await response2.json();
      setToDo(data1);
      setKomentars(data2);
      setLoading(false);
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
    </>
  );
}

export default App;
