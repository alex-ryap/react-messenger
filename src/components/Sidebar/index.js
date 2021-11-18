import { Logout } from '../Logout';
import { Menu } from '../Menu';
import { UserProfile } from '../UserProfile';
import './style.scss';

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <UserProfile />
      <Menu />
      <Logout />
    </div>
  );
};
