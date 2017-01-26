//@flow
import React from 'react'

type todoFormPropTypes = {
  todoTitle: string,
  todoText: string,
  handleAddTodo(): void,
  handleTitleInputChange(todoTitle: string): void,
  handleTextInputChange(todoText: string): void
}

const TodoForm = (props: todoFormPropTypes) => {

  const {
    todoTitle,
    todoText,
    handleAddTodo,
    handleTitleInputChange,
    handleTextInputChange
  } = props;

  return (
    <form id="todo-form" onSubmit={(e) => {
      e.preventDefault();
      handleAddTodo()
    }}>

      <input
        type="text"
        placeholder="Title"
        value={todoTitle}
        onChange={(e) => handleTitleInputChange(e.target.value)}
      />
      <input
        type="text"
        placeholder="Text"
        value={todoText}
        onChange={(e) => handleTextInputChange(e.target.value)}
      />

      <button type="submit">
        Add Todo
      </button>

    </form>
  )
};

export default TodoForm