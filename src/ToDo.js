function ToDo(props) {

const dater = props.data
console.log(dater)
    return (
<>
    <p>UserId:{dater.userId}</p>
    <p>id:{dater.id}</p>
    <p>title:{dater.title}</p>
    <p>completed: <input type="checkbox" checked={dater.completed} readOnly/> </p>
</>
    );
}

export default ToDo;