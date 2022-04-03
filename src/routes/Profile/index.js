import { onValue, set } from 'firebase/database';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react/cjs/react.development';
import { Sidebar } from '../../components/Sidebar';
import { EditableField } from '../../components/EditableField';
import { profileRef } from '../../services/firebase';
import { changeName } from '../../store/Profile/actions';
import { selectProfileUser } from '../../store/Profile/selectors';
import './style.scss';

export const Profile = () => {
  const profileUser = useSelector(selectProfileUser);
  const [name, setName] = useState(profileUser.name);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onValue(profileRef, (snapshot) => {
      const userData = snapshot.val();
      dispatch(changeName(userData?.name || ''));
    });

    return unsubscribe;
  }, []);

  const handleSaveSettings = (e) => {
    e.preventDefault();
    set(profileRef, {
      name: name,
      avatar: profileUser.avatar,
    });
  };

  const handleChangeName = useCallback((e) => {
    setName(e.target.value);
  }, []);

  return (
    <>
      <Sidebar />
      <div className="profile">
        <div className="profile__content">
          <h1>Profile</h1>
          <div className="profile__settings">
            <EditableField
              title="Name"
              value={name}
              onChange={handleChangeName}
            />
          </div>
        </div>
        <button className="profile__btn" onClick={handleSaveSettings}>
          Save
        </button>
      </div>
    </>
  );
};
