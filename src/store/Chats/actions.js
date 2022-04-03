import { onValue, set } from 'firebase/database';
import {
  chatsRef,
  getChatMessagesRefById,
  getChatRefById,
} from '../../services/firebase';

export const ADD_CHAT = 'CHATS::ADD_CHAT';
export const SET_CHATS = 'CHATS::SET_CHATS';
export const DELETE_CHAT = 'CHATS::DELETE_CHAT';

export const addChat = (newChat) => ({
  type: ADD_CHAT,
  payload: newChat,
});

export const deleteChat = (chatId) => ({
  type: DELETE_CHAT,
  payload: chatId,
});

export const addChatWithFb = (newChat) => (dispatch) => {
  set(getChatRefById(newChat.id), newChat);
  set(getChatMessagesRefById(newChat.id), { empty: true });
};

export const deleteChatWithFb = (chatId) => (dispatch) => {
  set(getChatRefById(chatId), null);
};

export const setChats = (chats) => ({
  type: SET_CHATS,
  payload: chats,
});

export const initChatsTracker = () => (dispatch) => {
  onValue(chatsRef, (chatsSnap) => {
    const chats = [];

    chatsSnap.forEach((snapshot) => {
      chats.push(snapshot.val());
    });
    dispatch(setChats(chats));
  });
};
