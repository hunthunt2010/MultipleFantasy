import {FETCHING_MATCHUPS, FETCHING_MATCHUPS_SUCCESS} from '../constants';
import {combineReducers} from 'redux';

export const matchups = (state = {matchups: []}, action) => {
  switch (action.type) {
    case FETCHING_MATCHUPS:
      return Object.assign({}, state, {fetching: true});
    case FETCHING_MATCHUPS_SUCCESS:
      return Object.assign({}, state, {fetching: false, matchups: action.matchups});
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  matchups
});

export default rootReducer;
