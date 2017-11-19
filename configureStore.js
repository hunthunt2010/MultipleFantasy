import {applyMiddleware, createStore} from 'redux';
import reducer from './reducers'
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk'
import {fetchMatchups} from './actions/Matchups';

const middleware = [thunk, createLogger()];

export default function configureStore() {
  let store = createStore(reducer, applyMiddleware(...middleware))
  return store
}
