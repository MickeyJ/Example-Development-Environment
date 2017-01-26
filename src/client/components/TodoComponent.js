//@flow
import React from 'react'

import type { todo } from '../flowtypes'

type todoPropTypes = {
  todo: todo,
  removeTodo (todoID: number): void,
  completeTodo (todoID: number): void,
}

export default (props: todoPropTypes) => {

  const { id, title, text, complete } = props.todo;

  const todoStyleClass = (
    complete
      ? 'todo-item complete'
      : 'todo-item'
  );

  return (
    <div className={todoStyleClass}>

      <div className="todo-content">

        <h3>{title}</h3>
        <p>{text}</p>

      </div>

      <div className="todo-options">

        <button onClick={() => props.removeTodo(id)} className="remove-button">
          X
        </button>

        <button onClick={() => props.completeTodo(id)} className="complete-button">
          √
        </button>
      </div>
    </div>
  )
}