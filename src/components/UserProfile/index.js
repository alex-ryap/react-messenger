import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import {
  selectProfileName,
  selectProfilePhoto,
} from '../../store/Profile/selectors';
import './style.scss';

export const UserProfile = () => {
  const profilePhoto = useSelector(selectProfilePhoto);
  const profileName = useSelector(selectProfileName);

  return (
    <div className="user-profile">
      <NavLink to="/profile">
        <img className="user-profile__img" src={profilePhoto} alt="user" />
      </NavLink>
      <p className="user-profile__name">{profileName}</p>
    </div>
  );
};
