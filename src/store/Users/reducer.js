import { ADD_USER, CHANGE_USER, DELETE_USER, SET_USERS } from './actions';

const initialState = [];

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return [...state, action.payload];
    case CHANGE_USER:
      return [...state];
    case DELETE_USER:
      return [...state.filter((user) => user.userId !== action.payload)];
    case SET_USERS:
      return action.payload;
    default:
      return state;
  }
};
