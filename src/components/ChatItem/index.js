import { UserInfo } from '../UserInfo';
import { truncate } from '../../utils/common';
import './style.scss';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  selectAllMessages,
  selectLastMessage,
} from '../../store/Messages/selectors';
import { selectUser } from '../../store/Chats/selectors';

export const ChatItem = ({ id }) => {
  const user = useSelector(selectUser(id));
  const messages = useSelector(selectAllMessages(id));
  const lastMessage = useSelector(selectLastMessage(id));

  const newMessagesCount = messages.reduce(
    (sum, message) => (message.isRead ? sum + 0 : sum + 1),
    0
  );

  return (
    <li>
      <NavLink
        className={({ isActive }) =>
          isActive ? 'chat__item chat__item-active' : 'chat__item'
        }
        to={`/chats/${id}`}
      >
        <div className="top">
          <UserInfo user={user} />
          {lastMessage && lastMessage.date && (
            <span className="time">{lastMessage.date}</span>
          )}
        </div>
        <div className="body">
          {lastMessage && lastMessage.text && (
            <p className="last-message">{truncate(lastMessage.text)}</p>
          )}
          {newMessagesCount > 0 && (
            <div className="last-message__count">{newMessagesCount}</div>
          )}
        </div>
      </NavLink>
    </li>
  );
};
