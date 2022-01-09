export const REQUEST_HOLIDAYS_LOADING = 'CALENDAR::REQUEST_HOLIDAYS_LOADING';
export const REQUEST_HOLIDAYS_FAILURE = 'CALENDAR::REQUEST_HOLIDAYS_FAILURE';
export const REQUEST_HOLIDAYS_SUCCESS = 'CALENDAR::REQUEST_HOLIDAYS_SUCCESS';

export const getHolidaysLoading = () => ({
  type: REQUEST_HOLIDAYS_LOADING,
});

export const getHolidaysFailure = (error) => ({
  type: REQUEST_HOLIDAYS_FAILURE,
  payload: error,
});

export const getHolidaysSuccess = (holidays) => ({
  type: REQUEST_HOLIDAYS_SUCCESS,
  payload: holidays,
});

export const getHolidays = () => async (dispatch) => {
  dispatch(getHolidaysLoading());

  try {
    const currentDate = new Date();
    const urlFetch = `https://holidayapi.com/v1/holidays?key=413bcc57-ccd8-48b1-b6c8-34c75f5e2a40&pretty&country=RU&year=${
      currentDate.getFullYear() - 1
    }&month=${currentDate.getMonth() + 1}`;

    const response = await fetch(urlFetch);

    if (!response.ok)
      throw new Error('Holidays service not worked. Please try again later.');

    const result = await response.json();
    dispatch(getHolidaysSuccess(result.holidays));
  } catch (err) {
    dispatch(getHolidaysFailure(err.message));
  }
};
