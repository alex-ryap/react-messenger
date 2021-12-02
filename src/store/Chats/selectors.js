export const selectAllChats = (state) => state.chats;

export const selectAllChatsId = (state) => state.chats.map((chat) => chat.id);

export const selectChat = (id) => (state) =>
  state.chats.map((chat) => chat.id === id);

export const selectUser = (id) => (state) => {
  const chatIndex = state.chats.findIndex((chat) => chat.id === id);
  return state.chats[chatIndex].user;
};
