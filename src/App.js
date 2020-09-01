import React from 'react';
import ReactDOM from 'react-dom'

// importing other files to render 
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'

import './components/Todo.css'

const initialTodo = [  
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
  constructor() {
    super();

    this.state = {
      todos: initialTodo
    }
  }

  // changing tasks to completed onClick
  toggleCompleted = (clickedTaskId) => {
    this.setState({
      todos: this.state.todos.map((task) => {
        if (task.id === clickedTaskId) {
          return {
            ...task,
            completed: !task.completed
          };
        } else {
          return task;
        }
      })
    });
  };

  // adding items to the todos state
  addItem = (taskName) => {
    const newTodo = {
      task: taskName,
      id: new Date(),
      completed: false,
    };

    this.setState({
      todos: [...this.state.todos, newTodo]
    })
  }

  // removing completed items and updating state to reflect that 
  removeCompleted = (taskId) => {
    const uncompletedTasks = this.state.todos.filter(task => {
      return !task.completed
    })

    this.setState({
      todos: uncompletedTasks
    })
    
    /*this.setState({
      todos: this.state.todos.filter(todo => !todo.completed)
    })*/
  }

  

  render() {
    return (
      <div>
        <div>
          <h2>Todo List: MVP</h2>
          <TodoList todos={this.state.todos} toggleCompleted={this.toggleCompleted}/>
        </div>

        <TodoForm addItem={this.addItem} removeCompleted={this.removeCompleted}/>
      </div>
    );
  }
}

export default App;
