export const selectAllMessages = (id) => (state) => state.messages[id];
export const selectLastMessage = (id) => (state) =>
  state.messages[id][state.messages[id].length - 1];
