import { useParams } from 'react-router';
import { ChatComponent } from '../../components/Chat';
import { ChatsComponent } from '../../components/Chats';
import { Sidebar } from '../../components/Sidebar';
import './style.scss';

export const Chats = ({ chatsList, sendMessage }) => {
  const { chatId } = useParams();
  return (
    <div className="chats__page">
      <Sidebar />
      <ChatsComponent chatsList={chatsList} />
      {chatId ? (
        <ChatComponent chat={chatsList[chatId - 1]} sendMessage={sendMessage} />
      ) : (
        ''
      )}
    </div>
  );
};
