export const ADD_USER = 'USERS::ADD_USER';
export const DELETE_USER = 'USERS::DELETE_USER';
export const CHANGE_USER = 'USERS::CHANGE_USER';

export const addUser = (newUser) => ({
  type: ADD_USER,
  payload: newUser,
});

export const changeUser = (changedUser) => ({
  type: CHANGE_USER,
  payload: changedUser,
});

export const deleteUser = (userId) => ({
  type: DELETE_USER,
  payload: userId,
});
