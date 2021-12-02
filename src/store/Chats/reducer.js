import human1 from '../../img/human1.png';
import human2 from '../../img/human2.png';
import human3 from '../../img/human3.png';
import { ADD_CHAT, DELETE_CHAT } from './actions';

const initialState = [
  {
    id: 1,
    user: {
      userId: 1,
      avatar: human1,
      name: 'Lilly Robin',
    },
  },
  {
    id: 2,
    user: {
      userId: 2,
      avatar: human2,
      name: 'Bob Williams',
    },
  },
  {
    id: 3,
    user: {
      userId: 3,
      avatar: human3,
      name: 'Mary Grace',
    },
  },
  {
    id: 4,
    user: {
      userId: 4,
      avatar: human1,
      name: 'Ron Ashley',
    },
  },
];

export const chatsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CHAT:
      return [...state, action.payload];
    case DELETE_CHAT:
      return [...state.filter((chat) => chat.id !== action.payload)];
    default:
      return state;
  }
};
