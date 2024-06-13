// import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;



// import React, { useState } from 'react';
// import './App.css';

// function App() {
//   const [tasks, setTasks] = useState([]);
//   const [input, setInput] = useState('');

//   const addTask = () => {
//     if (input.trim() !== '') {
//       setTasks([...tasks, input]);
//       setInput('');
//     }
//   };

//   const handleInputChange = (e) => {
//     setInput(e.target.value);
//   };

//   return (
//     <div className="App">
//       <h1>To-Do List</h1>
//       <input 
//         type="text" 
//         value={input} 
//         onChange={handleInputChange} 
//         placeholder="Add a new task" 
//       />
//       <button onClick={addTask}>Add</button>
//       <ul>
//         {tasks.map((task, index) => (
//           <li key={index}>{task}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;










// import React, { useState } from 'react';
// import './App.css';

// function App() {
//   const [tasks, setTasks] = useState([]);
//   const [input, setInput] = useState('');

//   const addTask = () => {
//     if (input.trim() !== '') {
//       setTasks([...tasks, input]);
//       setInput('');
//     }
//   };

//   const handleInputChange = (e) => {
//     setInput(e.target.value);
//   };

//   const deleteTask = (indexToRemove) => {
//     const newTasks = tasks.filter((_, index) => index !== indexToRemove);
//     setTasks(newTasks);
//   };

//   return (
//     <div className="App">
//       <h1>To-Do List</h1>
//       <input
//         type="text"
//         value={input}
//         onChange={handleInputChange}
//         placeholder="Add a new task"
//       />
//       <button onClick={addTask}>Add</button>
//       <ul>
//         {tasks.map((task, index) => (
//           <li key={index}>
//             {task}
//             <button className="delete-btn" onClick={() => deleteTask(index)}>X</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;
























import React from 'react';
import ToDoList from './To-do-list';

function App() {
  return (
    <div className="App">
      <ToDoList />
    </div>
  );
}

export default App;
