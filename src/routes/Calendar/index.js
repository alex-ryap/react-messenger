import { PageTitle } from '../../components/PageTittle';
import './style.scss';

export const Calendar = () => {
  return (
    <div className="calendar">
      <div className="calendar__wrapper">
        <div className="calendar__header">
          <PageTitle title="Calendar" subtitle="Your events" />
        </div>
        <div className="calendar__content">
          <p>No new events</p>
        </div>
      </div>
    </div>
  );
};
