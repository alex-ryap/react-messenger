import { v4 as uuid4 } from 'uuid';

export const ADD_MESSAGE = 'MESSAGES::ADD_MESSAGE';

export const addMessage = (newMessage) => ({
  type: ADD_MESSAGE,
  payload: newMessage,
});

let timeout;

export const addMessageFromBot = (newMessage) => (dispatch) => {
  dispatch(addMessage(newMessage));

  if (newMessage.message.author !== 'Bot') {
    if (timeout) clearTimeout(timeout);

    timeout = setTimeout(() => {
      const botMessage = {
        id: uuid4(),
        author: -1,
        text: 'Hello, I am a bot',
        date: 'now',
        isRead: true,
      };

      dispatch(addMessage({ id: newMessage.id, message: botMessage }));
    }, 2000);
  }
};
