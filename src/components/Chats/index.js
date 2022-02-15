import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useCallback, useState } from 'react/cjs/react.development';
import { addChatWithFb, initChatsTracker } from '../../store/Chats/actions';
import { selectAllChats } from '../../store/Chats/selectors';
import { Button } from '../Button';
import { ChatItem } from '../ChatItem';
import { CreateChatDialog } from '../CreateChatDialog';
import { Input } from '../Input';
import { PageTitle } from '../PageTittle';
import { v4 as uuid } from 'uuid';
import './style.scss';
import { initMessagesTracker } from '../../store/Messages/actions';
import { initUsersTracking } from '../../store/Users/actions';

export const ChatsComponent = () => {
  const chatsList = useSelector(selectAllChats);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showDialog, setShowDialog] = useState(false);

  useEffect(() => {
    dispatch(initUsersTracking());
    dispatch(initChatsTracker());
    dispatch(initMessagesTracker());
  }, []);

  const openDialog = useCallback(() => {
    setShowDialog(true);
  }, []);

  const closeDialog = useCallback(() => {
    setShowDialog(false);
  }, []);

  const createChat = (userId) => {
    console.log(userId);
    const newChat = {
      id: uuid(),
      date: new Date().getTime(),
      userId: userId,
    };

    console.log(newChat);

    dispatch(addChatWithFb(newChat));
    navigate(`/chats/${newChat.id}`);
  };

  return (
    <div className="chats">
      {showDialog && <CreateChatDialog save={createChat} close={closeDialog} />}
      <div className="chats__content">
        <div className="chats__top">
          <PageTitle title="Chats" subtitle="Recent Chats" />
          <Button title="New chat" icon="fa-plus" eventClick={openDialog} />
        </div>
        <div className="chats__search">
          <Input placeholder="Search" icon="fa-search" />
        </div>
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
