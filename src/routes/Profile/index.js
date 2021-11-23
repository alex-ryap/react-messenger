import { useDispatch, useSelector } from 'react-redux';
import { UserProfile } from '../../components/UserProfile';
import { toggleTheme } from '../../store/Profile/actions';
import { selectThemeCheckbox } from '../../store/Profile/selectors';
import './style.scss';

export const Profile = () => {
  const themeCheckbox = useSelector(selectThemeCheckbox);
  const dispatch = useDispatch();

  const handleChecked = () => {
    dispatch(toggleTheme);
  };

  return (
    <div className="profile">
      <div className="profile__content">
        <h1>Profile</h1>
        <UserProfile />
        <label className="profile__theme">
          <input
            className="profile__checkbox"
            type="checkbox"
            value={themeCheckbox}
            onChange={handleChecked}
          />
          Dark theme
        </label>
      </div>
    </div>
  );
};
