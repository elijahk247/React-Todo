import React from 'react'

class TodoForm extends React.Component {
  constructor(props) {
    super(props);

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
    
    this.setState({
      todo: ''
    })
  }
  

  // render the buttons
  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            name='todo'
            value={this.state.todo}
            onChange={this.handleChanges}
          />
          <button>Add Todo</button>
          <button onClick={this.props.removeCompleted}>Clear Completed</button>
        </form>
        {/*<button onClick={() => this.props.removeCompleted}>{console.log(this.props.removeCompleted)}Clear Completed</button> */}
      </div>
    )
  }
}

export default TodoForm;