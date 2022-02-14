export const selectAllMessages = (id) => (state) => state.messages[id];
export const selectLastMessage = (id) => (state) => {
  return state.messages[id][state.messages[id].length - 1];
};
