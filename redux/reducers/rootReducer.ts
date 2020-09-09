import { combineReducers } from 'redux';
import { commentsReducer } from './commentsReducer';

export const rootReducer = combineReducers({
  post: commentsReducer,
});
