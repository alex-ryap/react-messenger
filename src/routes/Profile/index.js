import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react/cjs/react.development';
import { changeSettings } from '../../store/Profile/actions';
import {
  selectProfileUser,
  selectThemeCheckbox,
} from '../../store/Profile/selectors';
import './style.scss';

export const Profile = () => {
  const themeCheckbox = useSelector(selectThemeCheckbox);
  const profileUser = useSelector(selectProfileUser);
  const [name, setName] = useState(profileUser.name);
  const [themeDark, setThemeDark] = useState(themeCheckbox);
  const dispatch = useDispatch();

  const handleSaveSettings = useCallback(() => {
    const newSettings = {
      user: {
        ...profileUser,
        name: name,
      },
      themeDark,
    };
    dispatch(changeSettings(newSettings));
  }, [dispatch, profileUser, themeDark, name]);

  const handleChangeName = useCallback((e) => {
    setName(e.target.value);
  }, []);

  const handleChangeTheme = useCallback(
    (e) => {
      setThemeDark(!themeDark);
    },
    [setThemeDark, themeDark]
  );

  return (
    <div className="profile">
      <div className="profile__content">
        <h1>Profile</h1>
        <div className="profile__settings settings">
          {/* <div className="settings__field">
            <p className="settings__title">Photo</p>
          </div> */}
          <div className="settings__field">
            <p className="settings__title">Name</p>
            <input
              className="settings__edit settings__name"
              type="text"
              placeholder="Name"
              value={name}
              onChange={handleChangeName}
            />
          </div>
          <div className="settings__field">
            <p className="settings__title">Theme</p>
            <label className="settings__edit settings__theme">
              <input
                className="settings__checkbox"
                type="checkbox"
                value={themeDark}
                onChange={handleChangeTheme}
              />
              Dark theme
            </label>
          </div>
        </div>
      </div>
      <button className="profile__btn" onClick={handleSaveSettings}>
        Save
      </button>
    </div>
  );
};
