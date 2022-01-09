import './style.scss';

export const HolidaysList = ({ holidays }) => {
  return (
    <ul className="holidays_list">
      {holidays.map((holiday) => {
        return (
          <li className="holiday_item" key={holiday.uuid}>
            <b>{holiday.date}</b> - {holiday.name}
          </li>
        );
      })}
    </ul>
  );
};
