import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useCallback } from 'react/cjs/react.development';
import { selectAllUsers } from '../../store/Users/selectors';
import './style.scss';
import { selectAllChats } from '../../store/Chats/selectors';
import { useNavigate } from 'react-router';

export const CreateChatDialog = ({ save, close }) => {
  const [selectedUserId, setselectedUserId] = useState('');
  const [showError, setShowError] = useState(false);
  const navigate = useNavigate();
  const userList = useSelector(selectAllUsers);
  const chatsList = useSelector(selectAllChats);

  const handleChange = useCallback((e) => {
    setselectedUserId(e.target.value);
  }, []);

  const handleSave = () => {
    if (!selectedUserId) {
      setShowError(true);
      return;
    }
    setShowError(false);
    const chat = chatsList.find((chat) => chat.user.userId === selectedUserId);
    if (chat) {
      navigate(`/chats/${chat.id}`);
    } else {
      save(selectedUserId);
    }
    close();
  };

  return (
    <div className="layout">
      <div className="dialog">
        <div className="dialog__header">
          <h2 className="dialog__title">Create chat</h2>
        </div>
        <div className="dialog__content">
          <p>Select user:</p>
          <select className="dialog__input" onChange={handleChange}>
            <option></option>
            {userList.map((user) => (
              <option
                key={user.userId}
                data-id={user.userId}
                value={user.userId}
              >
                {user.name}
              </option>
            ))}
          </select>
          <p
            className="dialog__error"
            style={showError ? { opacity: 1 } : { opacity: 0 }}
          >
            Please, select user
          </p>
        </div>
        <div className="dialog__actions">
          <button className="dialog__btn btn-success" onClick={handleSave}>
            Save
          </button>
          <button className="dialog__btn btn-close" onClick={close}>
            Close
          </button>
        </div>
        <button className="dialog__close" onClick={close}>
          <i className="fas fa-times"></i>
        </button>
      </div>
    </div>
  );
};
