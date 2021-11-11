import { NavLink } from 'react-router-dom';
import './style.scss';

export const MenuItem = ({ item }) => {
  const iconClasses = `fas ${item.icon} menu__item__icon`;

  return (
    <li>
      <NavLink
        className={({ isActive }) =>
          isActive ? 'menu__item menu__item-active' : 'menu__item'
        }
        to={item.link}
      >
        <div className="menu__item__border"></div>
        <div className="menu__item__content">
          <i className={iconClasses}></i>
          <span className="menu__item__name">{item.name}</span>
        </div>
      </NavLink>
    </li>
  );
};
