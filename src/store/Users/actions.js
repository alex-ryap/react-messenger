export const ADD_USER = 'USERS::ADD_USER';
export const DELETE_USER = 'USERS::DELETE_USER';

export const addUser = (newUser) => ({
  type: ADD_USER,
  payload: newUser,
});

export const deleteUser = (userId) => ({
  type: ADD_USER,
  payload: userId,
});
