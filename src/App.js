import React from "react";

import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import "./components/Todo.css";

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
  // Constructor with state
  constructor() {
    super();
    this.state = {
      // this is the same as todos: todos
      todos
    };
  }

  addTodo = (e, todo) => {
    console.log("First Todos: ", this.state.todos);
    e.preventDefault();

    const newtodo = {
      task: todo,
      id: Date.now(),
      completed: false
    };

    this.setState({
      todos: [...this.state.todos, newtodo]
    });
    console.log("Second Todos: ", this.state.todos);
  };

  // Class methods to update state
  toggleTodo = todoId => {
    console.log(todoId);

    this.setState({
      todos: this.state.todos.map(todo => {
        // for bananas
        // checks todoId against the id of bananas obj
        if (todoId === todo.id) {
          // if they match, update the completed boolean on that todo
          return {
            ...todo,
            completed: !todo.completed
          };
          // this return generates the following obj:
          // { id: 123, task: "Bananas", completed: true}
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

  render() {
    // rendering is what gets put on the screen
    // the class App shows TodoForm and TodoList on the screen
    return (
      <div className="App">
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

// this.state = {
//   todos: todos
//  }
// // if we write an addTodo function
// todos = [...todos, newTodotodo]

// const [ todos, setTodos ] = useState();
// setTodos('value')
