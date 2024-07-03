// // App.js
// import React from 'react';
// import TodoApp from './TodoApp';

// const App = () => {
//   return (
//     <div>
//       {/* <h1>Todo App</h1> */}
//      <TodoApp />
//     </div>
//   );
// };

// export default App;

// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { addTodo, deleteTodo, editTodo } from './actions';

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       newTodoText: '',
//     };
//   }

//   handleChange = (event) => {
//     this.setState({ newTodoText: event.target.value });
//   };

//   handleSubmit = (event) => {
//     event.preventDefault();
//     this.props.addTodo(this.state.newTodoText);
//     this.setState({ newTodoText: '' });
//   };

//   render() {
//     const { todos, deleteTodo, editTodo } = this.props;
//     return (
//       <div>
//         <h1>Todo List</h1>
//         <form onSubmit={this.handleSubmit}>
//           <input type="text" value={this.state.newTodoText} onChange={this.handleChange} />
//           <button type="submit">Add Todo</button>
//         </form>
//         <ul>
//           {todos.map((todo) => (
//             <li key={todo.id}>
//               <span>{todo.text}</span>
//               <button onClick={() => editTodo(todo.id, prompt('Edit Todo:', todo.text))}>Edit</button>
//               <button onClick={() => deleteTodo(todo.id)}>Delete</button>
//             </li>
//           ))}
//         </ul>
//       </div>
//     );
//   }
// }

// const mapStateToProps = (state) => ({
//   todos: state.todos,
// });

// const mapDispatchToProps = {
//   addTodo,
//   deleteTodo,
//   editTodo,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(App);


import React from 'react';
import { Provider } from 'react-redux';
import store from './store'; // Import the store
import TodoApp from './TodoApp'; // Import the TodoApp component

const App = () => {
  return (
    <Provider store={store}>
      <TodoApp />
    </Provider>
  );
};

export default App;


