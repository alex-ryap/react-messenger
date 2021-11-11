import { ChatsList } from '../ChatsList';
import './style.scss';

export const ChatsComponent = ({ chatsList }) => {
  return (
    <div className="chats">
      <div className="chats__content">
        <div className="chats__top">
          <div className="chats__title">
            <h3 className="title">Chats</h3>
            <p className="subtitle">Recent Chats</p>
          </div>
          <button className="btn">
            <i className="fas fa-plus btn__icon"></i>
            New Chat
          </button>
        </div>
        <div className="chats__search">
          <input className="search-input" type="text" placeholder="Search" />
          <i className="fas fa-search search-icon"></i>
        </div>
        <ChatsList chats={chatsList} />
      </div>
    </div>
  );
};
