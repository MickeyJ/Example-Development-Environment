//@flow
import type { todo,  todoCollection } from '../flowtypes'

import React, { Component } from 'react'
import {connect} from 'react-redux'
import { addTodo, removeTodo, completeTodo } from '../redux/actions'

import TodoList from '../components/TodoList'
import TodoForm from '../components/TodoForm'

class TodoContainer extends Component {
  todoArray: [todo];
  lastTodoID: number;

  state: {
    todoTitle: string,
    todoText: string
  };

  props: {
    todos: todoCollection,
    addTodo(newTodo: todo): void,
    removeTodo(todoID: number): void,
    completeTodo(todoID: number): void
  };

  constructor(){
    super();
    this.state = {
      todoTitle: '',
      todoText: ''
    };
  }

  configureTodoData = () => {
    const todos: todoCollection = this.props.todos;

    this.todoArray = [];
    this.lastTodoID = 0;

    for(let t in todos){
      if(!todos.hasOwnProperty(t)) continue;
      this.todoArray.push(todos[+t]);
      this.lastTodoID = todos[+t].id;
    }
  };

  handleAddTodo = () => {

    const { todoTitle, todoText } = this.state;

    if(!todoTitle || ! todoText) return;

    this.props.addTodo({
      id: this.lastTodoID + 1,
      title: todoTitle,
      text: todoText,
      complete: false
    });

    this.setState({
      todoTitle: '',
      todoText: ''
    })
  };

  handleTitleInputChange = (todoTitle) => {
    this.setState({ todoTitle })
  };

  handleTextInputChange = (todoText) => {
    this.setState({ todoText })
  };

  render() {

    this.configureTodoData();

    return (
      <div id="todo-container">

        <h2>Todos!</h2>
        <hr/>

        <TodoForm
          todoTitle={this.state.todoTitle}
          todoText={this.state.todoText}
          handleAddTodo={this.handleAddTodo}
          handleTitleInputChange={this.handleTitleInputChange}
          handleTextInputChange={this.handleTextInputChange}
        />

        <hr/>

        <TodoList
          todos={this.todoArray}
          handleRemoveTodo={this.props.removeTodo}
          handleCompleteTodo={this.props.completeTodo}
        />

      </div>
    )
  }

}

export default connect(
  (state) => ({
    todos: state.todos
  }),{
    addTodo,
    removeTodo,
    completeTodo
  })(TodoContainer)