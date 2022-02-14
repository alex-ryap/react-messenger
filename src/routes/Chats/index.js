import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { ChatComponent } from '../../components/Chat';
import { ChatsComponent } from '../../components/Chats';
import { Sidebar } from '../../components/Sidebar';
import { selectAllChatsId } from '../../store/Chats/selectors';
import './style.scss';

export const Chats = () => {
  const chatsId = useSelector(selectAllChatsId);
  const { chatId } = useParams();

  return (
    <>
      <Sidebar />
      <div className="chat__page">
        <ChatsComponent />
        {chatId && chatsId.includes(chatId) && <ChatComponent id={chatId} />}
      </div>
    </>
  );
};
