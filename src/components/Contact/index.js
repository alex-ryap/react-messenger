import { NavLink } from 'react-router-dom';
import './style.scss';

export const Contact = ({ contact }) => {
  return (
    <li>
      <NavLink
        className={({ isActive }) =>
          isActive ? 'contact contact-active' : 'contact'
        }
        to={`/contacts/${contact.userId}`}
      >
        <img
          className="contact__avatar"
          src={contact.avatar}
          alt="user avatar"
        />
        <p className="contact__name">{contact.fullname}</p>
      </NavLink>
    </li>
  );
};
