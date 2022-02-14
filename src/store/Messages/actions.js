import { onValue, push } from 'firebase/database';
import { getMessagesRefById, messagesRef } from '../../services/firebase';

export const ADD_MESSAGE = 'MESSAGES::ADD_MESSAGE';
export const SET_MESSAGES = 'MESSAGES::SET_MESSAGES';

export const addMessage = (newMessage) => ({
  type: ADD_MESSAGE,
  payload: newMessage,
});

// let timeout;

// export const addMessageFromBot = (newMessage) => (dispatch) => {
//   dispatch(addMessage(newMessage));

//   if (newMessage.message.author !== 'Bot') {
//     if (timeout) clearTimeout(timeout);

//     timeout = setTimeout(() => {
//       const botMessage = {
//         id: uuid4(),
//         author: -1,
//         text: 'Hello, I am a bot',
//         date: 'now',
//         isRead: true,
//       };

//       dispatch(addMessage({ id: newMessage.id, message: botMessage }));
//     }, 2000);
//   }
// };

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
