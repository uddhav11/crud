import React, { useState, useEffect } from "react";

const TodoItem = ({todo, updateTodo, deleteTodo}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [completed, setCompleted] = useState(todo.completed);
  const [todoText, setTodoText] = useState(todo.text);

  const handleUpdate=() => {
    updateTodo(todo._id, {text: todoText, completed})
    setIsEditing(false)
  }


  return (
    <div>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => {
          setCompleted(!completed);
          updateTodo(todo._id, { text: todoText, completed: !completed });
        }}
      />
      {isEditing ? (
        <input
          type="text"
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
        />
      ) : (
        <span style={{ textDecoration: completed ? "line-through" : "none" }} className='flex-1'>
          {todo.text}
        </span>
      )}
      {isEditing ? (
        <button
          onClick={handleUpdate}
          className="ml-2 px-4 py-1 bg-green-500 text-white rounded"
        >
          Save
        </button>
      ) : (
        <button
          onClick={() =>setIsEditing(true)}
          className="ml-2 px-4 py-1 bg-blue-500 text-white rounded"
        >
          Edit
        </button>

      )}
      <button
          onClick={() =>deleteTodo(todo._id)}
          className="ml-2 px-4 py-1 bg-red-500 text-white rounded"
        >
          Delete
        </button>
    </div>
  );
};

export default TodoItem;
