import React, { useState } from "react";
import './style1.css'

function ToDo() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const toggleTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };


  return (
    <div class="todo">
      <h1>Todo List</h1>
      <input type="text" value={newTask} onChange={(e) => setNewTask(e.target.value)} />
    
      <button onClick= {addTask}>  Add Task  </button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <input type="checkbox" checked={task.completed} onChange={() => toggleTask(index)} />
            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}> {task.text}  </span>
            <button onClick={() => deleteTask(index)}> Delete</button>
          </li>
        ))}
      </ul>

    </div>
  )
}

export default ToDo;