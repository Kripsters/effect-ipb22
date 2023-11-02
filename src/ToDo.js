import { useState } from "react";

function ToDo(props) {
  // To completed izveido kā stāvokļa mainīgo
  const [runčuks, setRunčuks] = useState(props.completed);
  // Izveido abpusējo saistīšanu ar input
function changeState(){
  if(runčuks === true) {
    setRunčuks(false)
} else {
    setRunčuks(true);
} }

  return (
    <>
      <p>UserId: {props.userId}</p>
      <p>Id: {props.id}</p>
      <p>{props.title}</p>
      <input type="checkbox" onChange={() => changeState()} checked={runčuks}></input>
    </>
  );
}

export default ToDo;
