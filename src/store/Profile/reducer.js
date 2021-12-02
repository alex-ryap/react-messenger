import profilePhoto from '../../img/User Photo.png';
import { CHANGE_SETTINGS } from './actions';

const initialState = {
  user: {
    avatar: profilePhoto,
    name: 'Henry Jabbawockiez',
  },
  themeDark: false,
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_SETTINGS:
      return {
        ...action.payload,
      };
    default: {
      return state;
    }
  }
};
