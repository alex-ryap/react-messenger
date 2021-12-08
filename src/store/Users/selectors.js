export const selectAllUsers = (state) => state.users;
export const selectAllUsersId = (state) =>
  state.users.map((user) => user.userId);
export const selectUser = (id) => (state) =>
  state.users.find((user) => user.userId === id);
