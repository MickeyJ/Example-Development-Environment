// @flow
import './style/main.scss'

import React from 'react'
import { render } from 'react-dom'

import { Provider } from 'react-redux';
import store from './redux/store'

import TodoContainer from './containers/TodoContainer'

render(
  <Provider store={store}>
    <TodoContainer />
  </Provider>,
  document.getElementById('root')
);