//@flow
import type { todo } from '../flowtypes'

import React from 'react'
import TodoComponent from './TodoComponent'

type todoFormPropTypes = {
  todos: [todo],
  handleRemoveTodo (todoID: number): void,
  handleCompleteTodo (todoID: number): void
}

const TodoList = (props: todoFormPropTypes) => {

  const {
    todos,
    handleRemoveTodo,
    handleCompleteTodo
  } = props;

  return (
    <div className="todo-list">
      {todos.map(todo =>(
        <TodoComponent
          key={todo.id}
          todo={todo}
          removeTodo={handleRemoveTodo}
          completeTodo={handleCompleteTodo}
        />
      ))}
    </div>
  )
};

export default TodoList