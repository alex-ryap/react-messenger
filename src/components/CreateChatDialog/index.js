import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useCallback } from 'react/cjs/react.development';
import { selectAllUsers } from '../../store/Users/selectors';
import { selectAllChats } from '../../store/Chats/selectors';
import { useNavigate } from 'react-router';
import { Dialog } from '../Dialog';

export const CreateChatDialog = ({ save, close }) => {
  const [selectedUserId, setselectedUserId] = useState('');
  const [showError, setShowError] = useState(false);
  const navigate = useNavigate();
  const userList = useSelector(selectAllUsers);
  const chatsList = useSelector(selectAllChats);

  const handleChange = useCallback((e) => {
    setselectedUserId(e.target.value);
  }, []);

  const handlerSave = () => {
    if (!selectedUserId) {
      setShowError(true);
      return;
    }
    setShowError(false);
    const chat = chatsList.find((chat) => chat.userId === selectedUserId);
    if (chat) {
      navigate(`/chats/${chat.id}`);
    } else {
      save(selectedUserId);
    }
    close();
  };

  return (
    <Dialog title="Create chat" save={handlerSave} close={close}>
      <p>Select user:</p>
      <select className="dialog__input" onChange={handleChange}>
        <option></option>
        {userList.map((user) => (
          <option key={user.userId} data-id={user.userId} value={user.userId}>
            {user.fullname}
          </option>
        ))}
      </select>
      <p
        className="dialog__error"
        style={showError ? { opacity: 1 } : { opacity: 0 }}
      >
        Please, select user
      </p>
    </Dialog>
  );
};
