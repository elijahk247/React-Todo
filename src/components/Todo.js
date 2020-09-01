import React from 'react'

export default function Todo(props) {
  const { todo } = props;

  return(
    <div>
      <p>
        {todo.task}
      </p>
    </div>
  )
}