import React from "react";

class TodoForm extends React.Component {
    // Constructor with state
    constructor() {
      super();
      this.state = {
        todo: ""
      };
    }
    // handleChange event
    handleChanges = e => {
        // update state with each keystroke
        this.setState({ [e.target.task]: e.target.value });
        console.log(this.state.todo);
      };
    // class property to submit form
    submitTodo = e => {
        e.preventDefault();

        this.setState({ todo: "" });
        this.props.addTodo(e, this.state.todo);
    };

    //RENDER HERE:
    render() {
        console.log("TodoForm Props:", this.props);
        return (
          <form onSubmit={this.submitTodo}>
            {/* This is an uncontrolled component 😬 We want it to be controlled by state */}
            <input
              type="text"
              name="todo"
              value={this.state.todo}
              onChange={this.handleChanges}
            />
            <button>Add</button>
          </form>
        );
      }
    }
    
    export default TodoForm;