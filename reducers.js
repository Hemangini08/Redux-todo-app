import { ADD_TODO, EDIT_TODO, DELETE_TODO } from './actions';
const initialState = {
    todos: [],
  };
  
  const todoReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_TODO:
        return {
          ...state,
          todos: [...state.todos, action.payload],
        };
      case EDIT_TODO:
        return {
          ...state,
          todos: state.todos.map((todo) =>
            todo.id === action.payload.id ? { ...todo, text: action.payload.text } : todo
          ),
        };
      case DELETE_TODO:
        return {
          ...state,
          todos: state.todos.filter((todo) => todo.id !== action.payload.id),
        };
      default:
        return state;
    }
  };
  
  export default todoReducer;