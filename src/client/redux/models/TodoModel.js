//@flow
import type { todo } from '../../flowtypes'

export default class TodoModel {
  id: number;
  title: string;
  text: string;
  complete: boolean;

  constructor(newTodo: todo){
    this.id = newTodo.id;
    this.title = newTodo.title;
    this.text = newTodo.text;
    this.complete = newTodo.complete;
  }

}