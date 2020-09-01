import React from 'react'

// styling the completed task


export default function Todo(props) {
  const { todo, toggleCompleted } = props;

  return(
    <div onClick={() => toggleCompleted(todo.id)}
    className={todo.completed ? "completed" : ''}>
      <p>
        {todo.task}
      </p>
    </div>
  )
}