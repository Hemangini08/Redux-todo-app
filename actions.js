export const ADD_TODO = 'ADD_TODO';
export const EDIT_TODO = 'EDIT_TODO';
export const DELETE_TODO = 'DELETE_TODO';

export const addTodo = (text) => ({
  type: ADD_TODO,
  payload: {
    id: Math.random().toString(36).substring(2, 15),
    text,
    completed: false,
  },
});

export const editTodo = (id, text) => ({
  type: EDIT_TODO,
  payload: { id, text },
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: { id },
});