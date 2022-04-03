import {
  getHolidays,
  getHolidaysFailure,
  getHolidaysLoading,
  getHolidaysSuccess,
  REQUEST_HOLIDAYS_FAILURE,
  REQUEST_HOLIDAYS_LOADING,
  REQUEST_HOLIDAYS_SUCCESS,
} from '../actions';

describe('getHolidaysLoading', () => {
  it('should return object with type', () => {
    const expected = {
      type: REQUEST_HOLIDAYS_LOADING,
    };

    const received = getHolidaysLoading();

    expect(received).toEqual(expected);
  });
});

describe('getHolidaysSuccess', () => {
  it('should return object with type and payload', () => {
    const payload = [];
    const expected = {
      type: REQUEST_HOLIDAYS_SUCCESS,
      payload,
    };

    const received = getHolidaysSuccess(payload);

    expect(received).toEqual(expected);
  });
});

describe('getHolidaysFailure', () => {
  it('should return object with type and error payload', () => {
    const payload = new Error('Test error');
    const expected = {
      type: REQUEST_HOLIDAYS_FAILURE,
      payload,
    };

    const received = getHolidaysFailure(payload);

    expect(received).toEqual(expected);
  });
});

describe('getHolidays', () => {
  it('dispatches getHolidaysLoading', () => {
    const mockDispatch = jest.fn();

    getHolidays()(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(getHolidaysLoading());
  });

  it('dispatch holidays success on successfully fetch', async () => {
    fetch.mockResponseOnce(JSON.stringify({ holidays: [] }));
    const mockDispatch = jest.fn();

    await getHolidays()(mockDispatch);

    expect(mockDispatch).toHaveBeenLastCalledWith(getHolidaysSuccess([]));
  });

  it('dispatch holidays fail on failure fetch', async () => {
    fetch.mockRejectOnce(new Error('test'));
    const mockDispatch = jest.fn();

    await getHolidays()(mockDispatch);

    expect(mockDispatch).toHaveBeenLastCalledWith(getHolidaysFailure('test'));
  });
});
