import { ADD_MESSAGE, SET_MESSAGES } from './actions';
// import { ADD_CHAT, DELETE_CHAT } from '../Chats/actions';

const initialState = {
  // 1: [
  //   {
  //     id: uuid(),
  //     author: 1,
  //     text: 'Hi, Henry',
  //     date: '2 minutes ago',
  //     isRead: true,
  //   },
  //   {
  //     id: uuid(),
  //     author: 1,
  //     text: 'How are you?',
  //     date: '2 minutes ago',
  //     isRead: false,
  //   },
  // ],
  // 2: [
  //   {
  //     id: uuid(),
  //     author: 2,
  //     text: 'Where are you?',
  //     date: '12 minute ago',
  //     isRead: true,
  //   },
  // ],
  // 3: [
  //   {
  //     id: uuid(),
  //     author: 3,
  //     text: `Most of its text is made up from sections 1.10.32–3 of Cicero's De finibus bonorum et malorum (On the Boundaries of Goods and Evils; finibus may also be translated as purposes).`,
  //     date: '25 minute ago',
  //     isRead: true,
  //   },
  // ],
  // 4: [
  //   {
  //     id: uuid(),
  //     author: 4,
  //     text: 'Go to lunch',
  //     date: '1 hour ago',
  //     isRead: true,
  //   },
  // ],
};

export const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return {
        ...state,
        [action.payload.id]: [
          ...state[action.payload.id],
          action.payload.message,
        ],
      };
    // case ADD_CHAT:
    //   return {
    //     ...state,
    //     [action.payload.id]: [],
    //   };
    // case DELETE_CHAT: {
    //   const newState = state;
    //   delete newState[action.payload.id];
    //   return newState;
    // }
    case SET_MESSAGES:
      return action.payload;
    default:
      return state;
  }
};
