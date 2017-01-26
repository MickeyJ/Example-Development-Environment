import {renderComponent, expect} from '../test_helper'
import TodoContainer from '../../client/containers/TodoContainer'

describe('Todo Container', () =>{

  let container;

  beforeEach(() =>{
    container = renderComponent(TodoContainer);
  });

  it('should be wrapped in redux Connect', () =>{

    expect(TodoContainer.displayName).to.be.equal('Connect(TodoContainer)')

  });

  it('has correct id', () =>{

    expect(container).to.have.id('todo-container');

  });

  it('should contain child TodoForm', () =>{

    expect(container).to.have.descendants('form');

  });

});