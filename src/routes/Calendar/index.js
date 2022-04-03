import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '../../components/Button';
import { HolidaysList } from '../../components/HolidayList';
import { PageTitle } from '../../components/PageTittle';
import { Spinner } from '../../components/Spinner';
import { getHolidays } from '../../store/Calendar/actions';
import {
  selectHolidaysError,
  selectHolidaysList,
  selectHolidaysLoading,
} from '../../store/Calendar/selectors';
import './style.scss';

export const Calendar = () => {
  const dispatch = useDispatch();
  const holidays = useSelector(selectHolidaysList);
  const isLoading = useSelector(selectHolidaysLoading);
  const error = useSelector(selectHolidaysError);

  const requestHolidays = async () => {
    dispatch(getHolidays());
  };

  useEffect(() => {
    requestHolidays();
  }, []);

  return (
    <div className="calendar">
      <div className="calendar__wrapper">
        <div className="calendar__header">
          <PageTitle title="Calendar" subtitle="Your events" />
        </div>
        <div className="calendar__content">
          {isLoading ? (
            <Spinner />
          ) : (
            <>
              <Button
                title="Update"
                icon="fa-redo-alt"
                eventClick={requestHolidays}
              />
              {error && <p>Error: {error}</p>}
              <HolidaysList holidays={holidays} />
            </>
          )}
        </div>
      </div>
    </div>
  );
};
