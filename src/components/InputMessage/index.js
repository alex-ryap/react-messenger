import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import './style.scss';
import { useDispatch } from 'react-redux';
import { addMessageWithFb } from '../../store/Messages/actions';
import { push } from 'firebase/database';
import { getMessagesRefById } from '../../services/firebase';

export const InputMessage = ({ chatId }) => {
  const [text, setText] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (text) {
      const message = {
        id: uuid(),
        chatId: chatId,
        author: 0,
        text: text,
        date: new Date().getTime(),
        isRead: true,
      };
      debugger;
      push(getMessagesRefById(chatId), message);
      setText('');
    }
  };

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form__actions">
        <input
          className="form__input"
          type="text"
          placeholder="Type a message here"
          onChange={handleChange}
          value={text}
        />
        <button className="form__btn" type="submit">
          <i className="fas fa-location-arrow"></i>
        </button>
      </div>
    </form>
  );
};
