import { ChatItem } from '../ChatItem';
import './style.scss';

export const ChatsList = ({ chats }) => {
  return (
    <ul className="chats__list">
      {chats.map((chat) => {
        return <ChatItem chat={chat} key={chat.id} />;
      })}
    </ul>
  );
};
