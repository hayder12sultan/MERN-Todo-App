import './App.css';
import { useState, useEffect } from 'react';


function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');

  // Fetch tasks on component load
  useEffect(() => {
    fetch('http://localhost:5001/api/todos')
      .then(res => res.json())
      .then(data => setTodos(data))
      .catch(err => console.error(err));
  }, []);

  // Handle adding a new task
  const addTodo = async (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    const res = await fetch('http://localhost:5001/api/todos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text })
    });
    const newTodo = await res.json();
    setTodos([...todos, newTodo]);
    setText('');
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h2>MERN Stack Todo App</h2>
      <form onSubmit={addTodo}>
        <input 
          type="text" 
          value={text} 
          onChange={(e) => setText(e.target.value)} 
          placeholder="Add a new task..." 
        />
        <button type="submit">Add Task</button>
      </form>
      <ul>
        {todos.map(todo => (
          <li key={todo._id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;