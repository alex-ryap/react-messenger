import { logOut } from '../../services/firebase';
import './style.scss';

export const Logout = () => {
  const handleLogOut = async () => {
    try {
      await logOut();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <span className="logout" onClick={handleLogOut}>
      <i className="fas fa-power-off logout__icon"></i>
      <span className="logout__text">Log out</span>
    </span>
  );
};
