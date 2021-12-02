import { TOGGLE_THEME } from './actions';

const initialState = {
  themeDark: false,
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_THEME:
      return {
        ...state,
        themeDark: !state.themeDark,
      };
    default: {
      return state;
    }
  }
};
