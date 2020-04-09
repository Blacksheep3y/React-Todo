import React from "react";

import "./components/Todo.css";

// todo data: (an array of objects)
  const todos =
  [
    {
      task: 'Organize Garage',
      id: 1528817077286,
      completed: false
    },
    {
      task: 'Bake Cookies',
      id: 1528817084358,
      completed: false
    }
  ];

class App extends React.Component {
// you will need a place to store your state in this component.
// design `App` to be the parent component of your application.
// this component is going to take care of state, and any change handlers you need to work with your state

  // Constructor with state
  constructor() {
    super();
    this.state = {
      // this is the same as todos: todos
      todos
    };
  }
  // Add a new todo
  addTodo = (e, todo) => {
    console.log("First Todos: ", this.state.todos);
    e.preventDefault();
    // new todo data:
    const newTodo = {
      task: todo,
      id: Date.now(),
      completed: false
    };
    // set the state to a new copy of the todos array with the added todo (newTodo).
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
    console.log("Second Todos: ", this.state.todos);
  };
  // Class methods to update state
  toggleTodo = todoId => {
    console.log(todoId);

    this.setState({
      todos: this.state.todos.map(todo => {
        // for 'Organize Garage'
        // checks todoId against the id of 'Organize Garage' obj
        if (todoId === todo.id) {
          // if they match, update the 'completed' boolean on that todo
          return {
            ...todo,
            completed: !todo.completed
          };
          // this return generates the following obj:
          // { task: 'Organize Garage', id: 123, completed: true}
        }

        // if they don't match, just return the todo
        return todo;
      })
    });
  };
  
  clearCompleted = e => {
    e.preventDefault();

    this.setState({
      todos: this.state.todos.filter(todo => !todo.completed)
    });
  };
  
  //RENDER HERE:
  render() {
    // rendering is what gets put on the screen
    // the class App shows TodoForm and TodoList on the screen
    return (
      <div className="App">
        <h2>Welcome to your Todo App!</h2>
        <div className="header">
          <h1>Todo List</h1>
          <TodoForm addTodo={this.addTodo} />
        </div>
        <TodoList
          todos={this.state.todos}
          toggleTodo={this.toggleTodo}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
