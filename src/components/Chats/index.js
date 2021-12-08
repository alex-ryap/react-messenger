import { useDispatch, useSelector } from 'react-redux';
import { useCallback, useState } from 'react/cjs/react.development';
import { addChat } from '../../store/Chats/actions';
import { selectAllChats } from '../../store/Chats/selectors';
import { Button } from '../Button';
import { ChatItem } from '../ChatItem';
import { CreateChatDialog } from '../CreateChatDialog';
import { PageTitle } from '../PageTittle';
import { SearchInput } from '../SearchInput';
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
          <PageTitle title="Chats" subtitle="Recent Chats" />
          <Button title="New chat" icon="fa-plus" eventClick={openDialog} />
        </div>
        <SearchInput />
        {chatsList.length === 0 && <p className="chats__empty">No chats</p>}
        <ul className="chats__list">
          {chatsList.map((chat) => {
            return <ChatItem id={chat.id} key={chat.id} />;
          })}
        </ul>
      </div>
    </div>
  );
};
