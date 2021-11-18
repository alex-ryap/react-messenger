import { useState } from 'react';
import { useCallback } from 'react/cjs/react.development';
import './style.scss';

export const CreateChatDialog = ({ save, close }) => {
  const [chatName, setChatName] = useState('');

  const handleChange = useCallback((e) => {
    setChatName(e.target.value);
  }, []);

  const handleSave = () => {
    save(chatName);
    close();
  };

  return (
    <div className="layout">
      <div className="dialog">
        <div className="dialog__header">
          <h2 className="dialog__title">Create chat</h2>
        </div>
        <div className="dialog__content">
          <label htmlFor="name">Chat name:</label>
          <input
            id="name"
            className="dialog__input"
            type="text"
            value={chatName}
            onChange={handleChange}
          />
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
