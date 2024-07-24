import React, { useState, useEffect } from "react";
import axios from "axios";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const [users, setUsers] = useState([]);
  const [text, setText] = useState("");

    useEffect(() => {
    fetchData();
  }, []);


  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/todos");
      setUsers(response.data);
    } catch (err) {
      console.error(err);
    }
  };


  const addTodo= async (text)=> {
  try {
        const response= await axios.post("http://localhost:4000/api/todos", {text});
        setUsers([...users, response.data])
            setText('')

      } catch (error) {
        console.log(error);
      }
  }



  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!text) return;
    addTodo(text);    
  };


  const deleteTodo = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/api/todos/${id}`);
      setUsers(users.filter((todo) => todo._id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  const updateTodo=async (id, updatedTodo)=> {
    try{
      const response= await axios.put(`http://localhost:4000/api/todos/${id}`, updatedTodo)
      setUsers(users.map(todo => (todo._id === id ? response.data: todo)))

    } catch (error){
      console.error(error)
    }
  }

  return (
    <div className="m-10">
      <div className="p-10 ">
        <form onSubmit={handleSubmit} className="">
          <label>Enter todo: </label>
          <input
            type="text"
            placeholder="Enter the task"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="m-2 px-4 py-2 bg-gray-300 text-black capitalize"
          />

          <button
            type="submit"
            className="m-2 px-4 w-25 rounded-full font-semibold  py-3 bg-blue-600"
          >
            Add todo
          </button>
        </form>
      </div>
      <div>
        {users &&
          users.map((user) => (
            <TodoItem
              todo={user}
              key={user._id}
              deleteTodo={deleteTodo}
              updateTodo={updateTodo}
            />
          ))}
      </div>
    </div>
  );
};

export default TodoList;
