import {combineReducers} from 'redux';

export const matchups = (state = [{}, {}], action) => {
  return state;
};

export const rootReducer = combineReducers({
  matchups
});

export default rootReducer;
