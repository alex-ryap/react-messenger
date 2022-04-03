import { useSelector } from 'react-redux';
import {
  selectProfileName,
  selectProfileUser,
} from '../../store/Profile/selectors';
import { selectUser } from '../../store/Users/selectors';
import { formatDate } from '../../utils/common';
import './style.scss';

export const Message = ({ message, author }) => {
  const profileName = useSelector(selectProfileName);
  const user = useSelector(
    author === 0 ? selectProfileUser : selectUser(author)
  );
  const classes =
    user.name === profileName ? 'message message__right' : 'message';

  const messageDate = formatDate(new Date(message.date));

  return (
    <li>
      <div className={classes}>
        <div className="message__content">
          <div className="message__text">{message.text}</div>
          <span className="message__date">{messageDate}</span>
        </div>
      </div>
    </li>
  );
};
