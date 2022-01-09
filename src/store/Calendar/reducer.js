import { REQUEST_STATUS } from '../../utils/constants';
import {
  REQUEST_HOLIDAYS_FAILURE,
  REQUEST_HOLIDAYS_LOADING,
  REQUEST_HOLIDAYS_SUCCESS,
} from './actions';

const initialState = {
  holidaysList: [],
  request: {
    status: REQUEST_STATUS.CREATED,
    error: '',
  },
};

export const holidayReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case REQUEST_HOLIDAYS_LOADING:
      return {
        ...state,
        request: {
          ...state.request,
          status: REQUEST_STATUS.LOADING,
        },
      };
    case REQUEST_HOLIDAYS_SUCCESS:
      return {
        ...state,
        holidaysList: payload,
        request: {
          error: '',
          status: REQUEST_STATUS.SUCCESS,
        },
      };
    case REQUEST_HOLIDAYS_FAILURE:
      return {
        ...state,
        request: {
          error: payload,
          status: REQUEST_STATUS.FAILURE,
        },
      };
    default: {
      return state;
    }
  }
};
