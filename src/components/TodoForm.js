import React from 'react'

class TodoForm extends React.Component {
  constructor() {
    super();

    this.state = {
      todo: ''
    };
  }

  // update on each keystroke
  handleChanges = e => {
    this.setState({
      todo: e.target.value
    });
  }

  // submitting the typed out task
  handleSubmit = e => {
    e.preventDefault();
    this.props.addItem(this.state.todo)
  }

  // render the buttons
  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <input
          type='text'
          name='todo'
          value={this.state.todo}
          onChange={this.handleChanges}
        />
        <button>Add Todo</button>
      </form>
    )
  }
}

export default TodoForm;