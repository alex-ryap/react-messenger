export const CHANGE_NAME = 'PROFILE::CHANGE_NAME';
export const SING_IN = 'PROFILE::SING_IN';
export const SING_OUT = 'PROFILE::SING_OUT';

export const changeName = (newName) => ({
  type: CHANGE_NAME,
  payload: newName,
});

export const singIn = () => ({
  type: SING_IN,
});

export const signOut = () => ({
  type: SING_OUT,
});
