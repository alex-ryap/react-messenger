import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react/cjs/react.development';
import { deleteChat } from '../../store/Chats/actions';
import { selectUser } from '../../store/Chats/selectors';
import { selectAllMessages } from '../../store/Messages/selectors';
import { Options } from '../Options';
import { InputMessage } from '../InputMessage';
import { Message } from '../Message';
import { UserInfo } from '../UserInfo';
import './style.scss';

export const ChatComponent = ({ id }) => {
  const user = useSelector(selectUser(id));
  const messages = useSelector(selectAllMessages(id));
  const dispatch = useDispatch();

  const [showOptions, setShowOptions] = useState(false);
  const [posOptions, setPosOptions] = useState({ x: 0, y: 0 });

  const openOptions = useCallback((e) => {
    setPosOptions({
      x: e.clientX,
      y: e.clientY,
    });
    setShowOptions(true);
  }, []);

  const closeOptions = useCallback(() => {
    setShowOptions(false);
  }, []);

  const handleDelete = () => {
    dispatch(deleteChat(id));
  };

  return (
    <div className="chat">
      {showOptions && (
        <Options
          position={posOptions}
          close={closeOptions}
          onDelete={handleDelete}
        />
      )}
      <div className="chat__content">
        <div className="chat__header">
          <UserInfo user={user} />
          <button className="chat__options" onClick={openOptions}>
            <i className="fas fa-ellipsis-v"></i>
          </button>
        </div>
        <ul className="chat__messages">
          {messages.length === 0 && <p className="chat__empty">No messages</p>}
          {messages.map((message) => {
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
          <InputMessage chatId={id} />
        </div>
      </div>
    </div>
  );
};
