import { REQUEST_STATUS } from '../../utils/constants';

export const selectHolidaysList = (state) => state.holidays.holidaysList;
export const selectHolidaysLoading = (state) =>
  state.holidays.request.status === REQUEST_STATUS.LOADING;
export const selectHolidaysError = (state) => state.holidays.request.error;
