import userPhoto from '../../img/User Photo.png';
import './style.scss';

export const UserProfile = () => {
  return (
    <div className="user-profile">
      <img className="user-profile__img" src={userPhoto} alt="user" />
      <p className="user-profile__name">Henry Jabbawockiez</p>
    </div>
  );
};
