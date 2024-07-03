import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, editTodo, deleteTodo } from './actions';

const TodoApp = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos); // Access state from store

  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      dispatch(addTodo(newTodo));
      setNewTodo('');
    }
  };

  const handleEditTodo = (id, newText) => {
    dispatch(editTodo(id, newText));
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div className="todo-app">
      <h1>Todo List</h1>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add a new todo"
      />
      <button onClick={handleAddTodo}>Add</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
            >
              {todo.text}
            </span>
            <button onClick={() => handleEditTodo(todo.id, prompt('Edit todo:'))}>
              Edit
            </button>
            <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
