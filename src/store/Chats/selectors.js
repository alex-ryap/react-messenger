import { onValue } from 'firebase/database';
import { getUserRefById } from '../../services/firebase';

export const selectAllChats = (state) => state.chats;

export const selectAllChatsId = (state) => state.chats.map((chat) => chat.id);

export const selectChat = (id) => (state) =>
  state.chats.map((chat) => chat.id === id);

export const selectUser = (id) => (state) => {
  let user = {};
  const chat = state.chats.find((chat) => chat.id === id);
  onValue(getUserRefById(chat.userId), (snapshot) => {
    user = snapshot.val();
  });

  return user;
};

export const selectChatCreateDate = (id) => (state) => {
  const chat = state.chats.find((chat) => chat.id === id);
  return chat?.date;
};
