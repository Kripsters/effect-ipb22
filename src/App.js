import ToDo from "./ToDo.js";

function App() {
  const todo = {
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false,
  };

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
