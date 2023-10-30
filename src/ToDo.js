import React, { useState } from "react";

function ToDo(props) {
  const [runcuks, setRuncuks] = useState(true);

  function handleChange(event) {
    setRuncuks(event.target.checked);
  }

  return (
    <>
      <p>UserId:{props.userId}</p>
      <p>id:{props.id}</p>
      <p>title:{props.title}</p>
      <p>
        completed:{" "}
        <input type="checkbox" checked={runcuks} onChange={handleChange} />{" "}
      </p>
    </>
  );
}

export default ToDo;
