import Reac, {useState} from "react";

const TodoForm = ({addTodo}) => {
  const [text, setText] = useState("");

  const handleSubmit=(e) => {
    e.preventDefault()
    addTodo(text)
    setText('')
  }
  return (
    <div>
      <form action="#" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter the task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type='submit'>Add</button>
      </form>
    </div>
  );
};

export default TodoForm;
