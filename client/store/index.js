import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import businessesReducer from './businesses';
import businessReducer from './business';
import commentsReducer from './comments';
import userReducer from './user';
import ownerReducer from './owner';
import { createLogger } from 'redux-logger';

const reducer = combineReducers({
  user: userReducer,
  owner: ownerReducer,
  businesses: businessesReducer,
  business: businessReducer,
  comments: commentsReducer
});

const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
);

const store = createStore(reducer, middleware);

export default store;
