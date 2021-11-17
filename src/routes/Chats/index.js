import { useParams } from 'react-router';
import { ChatComponent } from '../../components/Chat';
import { ChatsComponent } from '../../components/Chats';
import './style.scss';

export const Chats = ({ chatsList, sendMessage, addChat, deleteChat }) => {
  const { chatId } = useParams();
  return (
    <div className="chats__page">
      <ChatsComponent chatsList={chatsList} addChat={addChat} />
      {chatId && Object.keys(chatsList).includes(chatId) && (
        <ChatComponent
          chat={chatsList[chatId]}
          id={chatId}
          sendMessage={sendMessage}
          deleteChat={deleteChat}
        />
      )}
    </div>
  );
};
