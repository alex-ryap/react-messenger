import { useDispatch, useSelector } from 'react-redux';
import { useCallback, useState } from 'react/cjs/react.development';
import { addChat } from '../../store/Chats/actions';
import { selectAllChats } from '../../store/Chats/selectors';
import { ChatItem } from '../ChatItem';
import { CreateChatDialog } from '../CreateChatDialog';
import './style.scss';

export const ChatsComponent = () => {
  const chatsList = useSelector(selectAllChats);
  const dispatch = useDispatch();
  const [showDialog, setShowDialog] = useState(false);

  const openDialog = useCallback(() => {
    setShowDialog(true);
  }, []);

  const closeDialog = useCallback(() => {
    setShowDialog(false);
  }, []);

  const createChat = (userId) => {
    const newChat = {
      id: chatsList.length + 1,
      user: userId,
    };

    dispatch(addChat(newChat));
  };

  return (
    <div className="chats">
      {showDialog && (
        <CreateChatDialog
          save={createChat}
          close={closeDialog}
          title="Create new chat"
        ></CreateChatDialog>
      )}
      <div className="chats__content">
        <div className="chats__top">
          <div className="chats__title">
            <h3 className="title">Chats</h3>
            <p className="subtitle">Recent Chats</p>
          </div>
          <button className="btn" onClick={openDialog}>
            <i className="fas fa-plus btn__icon"></i>
            New Chat
          </button>
        </div>
        <div className="chats__search">
          <input className="search-input" type="text" placeholder="Search" />
          <i className="fas fa-search search-icon"></i>
        </div>
        <ul className="chats__list">
          {chatsList.map((chat) => {
            return <ChatItem id={chat.id} key={chat.id} />;
          })}
        </ul>
      </div>
    </div>
  );
};
