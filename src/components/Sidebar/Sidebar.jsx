import UserInfo from '../UserInfo/UserInfo';
import ChatsList from '../ChatsList/ChatsList';
import Search from '../Search/Search';

export default function Sidebar({ chats }) {
  return (
    <div>
      <UserInfo />
      <Search />
      <h4>List of chats</h4>
      <ChatsList chats={chats} />
    </div>
  );
}
