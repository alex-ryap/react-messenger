import { useSelector } from 'react-redux';
import {
  selectProfileName,
  selectProfileUser,
} from '../../store/Profile/selectors';
import { selectUser } from '../../store/Users/selectors';
import './style.scss';

export const Message = ({ message, author }) => {
  const profileName = useSelector(selectProfileName);
  const user = useSelector(
    author === 0 ? selectProfileUser : selectUser(author)
  );
  const classes =
    user.name === profileName ? 'message message__right' : 'message';

  return (
    <li>
      <div className={classes}>
        <div className="message__content">
          <div className="message__text">{message.text}</div>
          <span className="message__date">{message.date}</span>
        </div>
      </div>
    </li>
  );
};
