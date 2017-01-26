import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger'
import reducers from './reducers';

let storeWithMiddleware;

if(process.env.NODE_ENV==='development'){
  storeWithMiddleware = applyMiddleware(logger())(createStore);
} else {
  storeWithMiddleware = createStore;
}

export default storeWithMiddleware(reducers);