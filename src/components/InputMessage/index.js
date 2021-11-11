import { useState } from 'react';
import { AUTHORS, DATEOPTIONS } from '../../utils/constants';
import userPhoto from '../../img/User Photo.png';
import { v4 as uuid } from 'uuid';
import './style.scss';

export const InputMessage = ({ chatId, sendMessage }) => {
  const [text, setText] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (text) {
      const message = {
        id: uuid(),
        author: {
          avatar: userPhoto,
          name: AUTHORS.me,
        },
        text: text,
        date: new Intl.DateTimeFormat('ru-RU', DATEOPTIONS).format(new Date()),
      };

      sendMessage(message, chatId);
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
