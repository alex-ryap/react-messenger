import { UserInfo } from '../UserInfo';
import { truncate } from '../../utils/common';
import './style.scss';
import { NavLink } from 'react-router-dom';

export const ChatItem = ({ chat, id }) => {
  return (
    <li>
      <NavLink
        className={({ isActive }) =>
          isActive ? 'chat__item chat__item-active' : 'chat__item'
        }
        to={`/chats/${id}`}
      >
        <div className="top">
          <UserInfo user={chat.user} />
          {chat.lastMessage.date && (
            <span className="time">{chat.lastMessage.date}</span>
          )}
        </div>
        <div className="body">
          {chat.lastMessage.text && (
            <p className="last-message">{truncate(chat.lastMessage.text)}</p>
          )}
          {chat.newMessagesCount > 0 && (
            <div className="last-message__count">{chat.newMessagesCount}</div>
          )}
        </div>
      </NavLink>
    </li>
  );
};
