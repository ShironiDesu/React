import React, { useEffect, useState } from 'react';
import ToDoItem from './ToDoItem';
import './loader.css'
export default function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  const [inputValue, setInputValue] = useState('');
  const [loading, setLoading] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);
const [deletedTodos,setDeletedTodos] = useState([])
  const addTodo = () => {
    if (inputValue.trim() === '') return;

    setIsAnimating(true); 
    setTimeout(() => {
      setTodos([...todos, { text: inputValue, completed: false }]);
      setInputValue('');
      setIsAnimating(false);
    }, 1000); 
  };

  const toggleStatus = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
    const deletedTodo = todos[index];
    setDeletedTodos([...deletedTodos, deletedTodo]);
 
  };
 const restoreTodo = (index) =>{
  const todoToRestore = deletedTodos[index];
  setTodos([...todos, todoToRestore]);
  const newDeletedTodos = deletedTodos.filter((_, i) => i !== index);
    setDeletedTodos(newDeletedTodos);
 }
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);  
  }, []);
  const handleEdit = (index, newText) => {
    const updatedTodos = todos.map((todo, i) => 
      i === index ? { ...todo, text: newText } : todo
    );
    setTodos(updatedTodos);
  };
  
 
  
  return (
    <div className="container">
               <div className={`progress-bar ${isAnimating ? 'animate' : ''}`}></div>
      <div className="todoList">
        <h1>To Do List</h1>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Todo"
        />
        <button onClick={addTodo}>Add</button>
        {loading ? (
          <span className="loader"></span>
        ) : (
          <ul>
            {todos.map((todo, index) => (
              <ToDoItem
              key={index}
              text={todo.text}
              completed={todo.completed}
              onToggle={() => toggleStatus(index)}
              onDelete={() => deleteTodo(index)}
              onEdit={(newText) => handleEdit(index, newText)}
            />
            ))}
          </ul>
        )}
      <div className="deleted-todos">
          <h2>Deleted Todos</h2>
          <ul>
            {deletedTodos.map((todo, index) => (
              <li key={index} >
                <span >{todo.text}</span>
                <input type="checkbox" checked={todo.completed}  />
                <button onClick={()=>restoreTodo(index)}>Restore</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
