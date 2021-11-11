import { MenuItem } from '../MenuItem';
import './style.scss';

const menuItems = [
  { name: 'Home', icon: 'fa-home', link: '/' },
  { name: 'Chat', icon: 'fa-comment-dots', link: '/chats' },
  { name: 'Contacts', icon: 'fa-user', link: '/contacts' },
  { name: 'Notifications', icon: 'fa-bell', link: '/notifications' },
  { name: 'Calendar', icon: 'fa-calendar-alt', link: '/calendar' },
  { name: 'Settings', icon: 'fa-cog', link: '/settings' },
];

export const Menu = () => {
  return (
    <ul className="menu">
      {menuItems.map((menuItem) => {
        return <MenuItem item={menuItem} key={menuItem.name} />;
      })}
    </ul>
  );
};
