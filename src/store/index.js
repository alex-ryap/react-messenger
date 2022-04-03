import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { chatsReducer } from './Chats/reducer';
import { messagesReducer } from './Messages/reducer';
import { profileReducer } from './Profile/reducer';
import { usersReducer } from './Users/reducer';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import { holidayReducer } from './Calendar/reducer';

const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose;

const persistConfig = {
  key: 'reactChat',
  storage,
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    profile: profileReducer,
    chats: chatsReducer,
    messages: messagesReducer,
    users: usersReducer,
    holidays: holidayReducer,
  })
);

export const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(thunk))
);
export const persistor = persistStore(store);
