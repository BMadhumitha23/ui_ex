import React, { useState } from 'react';

const ToDoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      if (editingIndex !== null) {
        // Update the existing task
        const updatedTasks = tasks.map((t, idx) =>
          idx === editingIndex ? { ...t, text: task } : t
        );
        setTasks(updatedTasks);
        setEditingIndex(null); // Stop editing
      } else {
        // Add new task
        setTasks([...tasks, { text: task, completed: false }]);
      }
      setTask('');
    }
  };

  const handleEdit = (index) => {
    setTask(tasks[index].text);
    setEditingIndex(index);
  };

  const toggleCompletion = (index) => {
    const updatedTasks = tasks.map((task, idx) =>
      idx === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, idx) => idx !== index);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={task}
          onChange={handleChange}
          placeholder="Enter new task"
          required
        />
        <button type="submit">{editingIndex !== null ? 'Update Task' : 'Add Task'}</button>
      </form>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <span
              style={{
                textDecoration: task.completed ? 'line-through' : 'none'
              }}
            >
              {task.text}
            </span>
            <button onClick={() => toggleCompletion(index)}>
              {task.completed ? 'Undo' : 'Complete'}
            </button>
            <button onClick={() => handleEdit(index)}>Edit</button>
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoApp;
