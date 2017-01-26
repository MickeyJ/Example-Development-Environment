//@flow

import type { todo, Action } from '../../flowtypes'

export function addTodo(todo: todo): Action {
  return {
    type: 'ADD_TODO',
    payload: todo
  }
}

export function removeTodo(todoID: number): Action {
  return {
    type: 'REMOVE_TODO',
    payload: todoID
  }
}

export function completeTodo(todoID: number): Action {
  return {
    type: 'COMPLETE_TODO',
    payload: todoID
  }
}