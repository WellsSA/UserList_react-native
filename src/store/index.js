import { createStore, combineReducers, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import usersReducer from './users/reducer';

const rootReducer = combineReducers({
  users: usersReducer,
});

export default createStore(rootReducer, applyMiddleware(reduxThunk));
