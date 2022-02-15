import profilePhoto from '../../img/profile.jpg';
import { CHANGE_NAME, SING_IN, SING_OUT } from './actions';

const initialState = {
  user: {
    avatar: profilePhoto,
    name: 'Star Lord',
  },
  authed: false,
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_NAME:
      return {
        ...state,
        user: {
          ...state.user,
          name: action.payload,
        },
      };
    case SING_IN:
      return {
        ...state,
        authed: true,
      };
    case SING_OUT:
      return {
        ...state,
        authed: false,
      };
    default: {
      return state;
    }
  }
};
