import { NavLink } from 'react-router-dom';
import userPhoto from '../../img/User Photo.png';
import './style.scss';

export const UserProfile = () => {
  return (
    <div className="user-profile">
      <NavLink to="/profile">
        <img className="user-profile__img" src={userPhoto} alt="user" />
      </NavLink>
      <p className="user-profile__name">Henry Jabbawockiez</p>
    </div>
  );
};
