import { onValue } from 'firebase/database';
import { messagesRef } from '../../services/firebase';

export const ADD_MESSAGE = 'MESSAGES::ADD_MESSAGE';
export const SET_MESSAGES = 'MESSAGES::SET_MESSAGES';

export const addMessage = (newMessage) => ({
  type: ADD_MESSAGE,
  payload: newMessage,
});

export const setMessages = (messages) => ({
  type: SET_MESSAGES,
  payload: messages,
});

export const initMessagesTracker = () => (dispatch) => {
  onValue(messagesRef, (messagesSnap) => {
    const messages = {};
    messagesSnap.forEach((snapshot) => {
      messages[snapshot.key] = Object.values(snapshot.val().messageList || {});
    });

    dispatch(setMessages(messages));
  });
};
