// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react'

// import Todo to render each item in the TodoList
import Todo from './Todo'

export default function TodoList(props) {
  const { todos, toggleCompleted } = props;

  return(
    <div>
      {
        todos.map((todo) => (
          <Todo key={todo.id} todo={todo} toggleCompleted={toggleCompleted}/>
        ))
      }
    </div>
  )
}