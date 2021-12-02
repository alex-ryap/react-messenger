import { createStore, combineReducers } from 'redux';
import { chatsReducer } from './Chats/reducer';
import { messagesReducer } from './Messages/reducer';
import { profileReducer } from './Profile/reducer';
import { usersReducer } from './Users/reducer';

export const store = createStore(
  combineReducers({
    profile: profileReducer,
    chats: chatsReducer,
    messages: messagesReducer,
    users: usersReducer,
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
