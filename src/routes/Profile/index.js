import { UserProfile } from '../../components/UserProfile';
import './style.scss';

export const Profile = () => {
  return (
    <div className="profile">
      <div className="profile__content">
        <h1>Profile</h1>
        <UserProfile />
      </div>
    </div>
  );
};
