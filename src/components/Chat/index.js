import { InputMessage } from '../InputMessage';
import { Message } from '../Message';
import { UserInfo } from '../UserInfo';
import './style.scss';

export const ChatComponent = ({ chat, sendMessage }) => {
  return (
    <div className="chat">
      <div className="chat__content">
        <div className="chat__header">
          <UserInfo user={chat.user} />
        </div>
        <ul className="chat__messages">
          {chat.messages.map((message) => {
            return (
              <Message message={message} user={chat.user} key={message.id} />
            );
          })}
        </ul>
        <div className="chat__input">
          <InputMessage chatId={chat.id - 1} sendMessage={sendMessage} />
        </div>
      </div>
    </div>
  );
};
