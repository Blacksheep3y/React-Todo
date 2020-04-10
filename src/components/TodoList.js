import React from "react";

import Todo from "./Todo";

const TodoList = props => {
  console.log("TodoList Props: ", props);
  // const sortedList = props.todos.sort((a, b) => a.completed - b.completed);
  return (
    <div className="todo-list">
      {props.todos.map(todo => (
        <Todo key={todo.id} todo={todo} toggleTodo={props.toggleTodo} />
      ))}
      <button className="clear-btn" onClick={props.clearCompleted}>
        Clear Completed
      </button>
    </div>
  );
};

export default TodoList;
