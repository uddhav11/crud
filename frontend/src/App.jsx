// import { useState, useEffect } from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import axios from "axios";
// import "./App.css";

// function App() {
//   const [name, setName] = useState("");
//   const [age, setAge] = useState("");
//   const [profession, setProfession] = useState("");
//   const [users, setUsers] = useState([]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const allData = { name, age, profession };
//     try {
//       const response = await axios.post("http://localhost:3000/user", allData);
//       fetchUsers();
//       setName("");
//       setAge("");
//       setProfession("");
//     } catch (err) {
//       console.error("the error is ", err);
//     }
//   };

//   const fetchUsers = async () => {
//     try {
//       const response = await axios.get("http://localhost:3000/user");
//       setUsers(response.data);
//     } catch (err) {
//       console.log("this is the get error", err);
//     }
//   };

//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   return (
//     <>
//       <div className="p-10 m-1 items-center flex-col ">
//         <form className="text-center" onSubmit={handleSubmit}>
//           <div className="m-2 p-2 text-xl font-semibold ">
//             <label>Enter Task: </label>
//             <input
//               type="text"
//               className="border shadow-md px-2 py-2 capitalize"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//             />
//           </div>

          
//             <button
//               type="submit"
//               className="m-4 px-5 py-3 bg-red-500 rounded-lg"
//             >
//               Submit
//             </button>
//         </form>
//         <div>
//           <h1>Users</h1>
//           <ul>
//             {users.map((user) => (
//               <li
//                 key={user._id}
//               > <input
//               type="radio"
//               className="border shadow-md px-2 py-2 capitalize"

//             />{`${user.name}- ${user.age} - ${user.profession}`}</li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;



import React from 'react'
import TodoList from './components/TodoList';

const App = () => {
  return (
    <>
      <TodoList />
    </>
  )
}

export default App;