import { UserInfo } from '../UserInfo';
import { truncate } from '../../utils/common';
import './style.scss';
import { useNavigate, useParams } from 'react-router';

export const ChatItem = ({ chat }) => {
  const { chatId } = useParams();
  const navigator = useNavigate();

  return (
    <li
      className={
        chatId && Number(chatId) === chat.id
          ? 'chat__item chat__item-active'
          : 'chat__item'
      }
      onClick={() => navigator('/chats/' + chat.id)}
    >
      <div className="top">
        <UserInfo user={chat.user} />
        <span className="time">{chat.lastMessage.date}</span>
      </div>
      <div className="body">
        <p className="last-message">{truncate(chat.lastMessage.text)}</p>
        {chat.newMessagesCount ? (
          <div className="last-message__count">{chat.newMessagesCount}</div>
        ) : (
          ''
        )}
      </div>
    </li>
  );
};
