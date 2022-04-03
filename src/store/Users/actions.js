import { onValue, set, update } from 'firebase/database';
import { getUserRefById, usersRef } from '../../services/firebase';

export const ADD_USER = 'USERS::ADD_USER';
export const SET_USERS = 'USERS::SET_USERS';
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

export const addUserWithFb = (newUser) => (dispatch) => {
  set(getUserRefById(newUser.userId), newUser);
};

export const updateUserWithFb = (updatedUser) => (dispatch) => {
  update(getUserRefById(updatedUser.userId), updatedUser);
};

export const deleteUserWithFb = (id) => (dispatch) => {
  set(getUserRefById(id), null);
};

export const setUsers = (users) => ({
  type: SET_USERS,
  payload: users,
});

export const initUsersTracking = () => (dispatch) => {
  onValue(usersRef, (usersSnap) => {
    const users = [];

    usersSnap.forEach((snapshot) => {
      users.push(snapshot.val());
    });
    dispatch(setUsers(users));
  });
};
