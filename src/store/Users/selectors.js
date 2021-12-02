export const selectAllUsers = (state) => state.users;
export const selectUser = (id) => (state) => {
  const user = state.users.find((user) => user.userId === id);
  return user;
};
