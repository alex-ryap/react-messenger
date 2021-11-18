import { useState } from 'react';
import { useCallback } from 'react/cjs/react.development';
import { ChatOptions } from '../ChatOptions';
import { InputMessage } from '../InputMessage';
import { Message } from '../Message';
import { UserInfo } from '../UserInfo';
import './style.scss';

export const ChatComponent = ({ chat, id, sendMessage, deleteChat }) => {
  const [showChatOptions, setShowChatOptions] = useState(false);
  const [posOptions, setPosOptions] = useState({ x: 0, y: 0 });

  const openOptions = useCallback((e) => {
    setPosOptions({
      x: e.clientX,
      y: e.clientY,
    });
    setShowChatOptions(true);
  }, []);

  const closeOptions = useCallback(() => {
    setShowChatOptions(false);
  }, []);

  const handleDelete = () => {
    deleteChat(id);
  };

  return (
    <div className="chat">
      {showChatOptions && (
        <ChatOptions
          position={posOptions}
          close={closeOptions}
          onDelete={handleDelete}
        />
      )}
      <div className="chat__content">
        <div className="chat__header">
          <UserInfo user={chat.user} />
          <button className="chat__options" onClick={openOptions}>
            <i className="fas fa-ellipsis-v"></i>
          </button>
        </div>
        <ul className="chat__messages">
          {chat.messages.map((message) => {
            return (
              <Message
                message={message}
                author={message.author}
                key={message.id}
              />
            );
          })}
        </ul>
        <div className="chat__input">
          <InputMessage chatId={id} sendMessage={sendMessage} />
        </div>
      </div>
    </div>
  );
};
