//@flow
import type { todo, todoCollection, Action } from '../../flowtypes'

import _ from 'lodash'
import TodoModel from '../models/TodoModel'

const initialTodo = new TodoModel({
  id: 1,
  title: 'Do Stuff',
  text: 'I really need todo Stuff :/',
  complete: true
});

const INITIAL_STATE = {
  [initialTodo.id]: initialTodo
};

export default function(state: todoCollection = INITIAL_STATE, action: Action){

  let newTodo: todo;

  switch(action.type){

    case 'ADD_TODO':
      newTodo = new TodoModel({...action.payload});
      return {...state,
        [action.payload.id]: newTodo
      };

    case 'REMOVE_TODO':
      return _.omit(state, action.payload);

    case 'COMPLETE_TODO':
      const todoID = action.payload;

      newTodo = new TodoModel({...state[todoID], complete: !state[todoID].complete});

      return {...state,
        [todoID]: newTodo
      };

    default: return state

  }

}