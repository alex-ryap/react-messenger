import human1 from '../../img/human1.png';
import human2 from '../../img/human2.png';
import human3 from '../../img/human3.png';
import { ADD_USER, DELETE_USER } from './actions';

const initialState = [
  {
    userId: 1,
    avatar: human1,
    name: 'Lilly Robin',
  },
  {
    userId: 2,
    avatar: human2,
    name: 'Bob Williams',
  },
  {
    userId: 3,
    avatar: human3,
    name: 'Mary Grace',
  },
  {
    userId: 4,
    avatar: human1,
    name: 'Ron Ashley',
  },
  {
    userId: 5,
    avatar: human2,
    name: 'James Bran',
  },
];

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return [...state, action.payload];
    case DELETE_USER:
      return [...state.filter((user) => user.userId === action.payload)];
    default:
      return state;
  }
};
