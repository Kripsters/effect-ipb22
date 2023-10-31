import ToDo from "./ToDo.js";
import React, { useEffect, useState } from "react";

function App() {
  const [todo, setTodo] = useState({});
  useEffect(() => {
    async function getToDoData() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos/69"
      );
      const doto = await response.json();
      setTodo(doto);
    }
    getToDoData();
  });

  //  const todo = {
  //    userId: 1,
  //    id: 1,
  //    title: "delectus aut autem",
  //    completed: false,
  //  };

  //const helloToDo = todo.map((index, current) => {
  //  return <ToDo key={index} />
  //});

  return (
    <>
      <ToDo {...todo} />
    </>
  );
}

export default App;
