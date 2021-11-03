import { useState } from 'react';
import { AUTHORS, DATEOPTIONS } from '../../utils/constants';
import './InputMessage.scss';

export const InputMessage = ({ submit }) => {
  const [text, setText] = useState('');

  const handlerSubmit = (event) => {
    event.preventDefault();
    if (text) {
      const message = {
        author: AUTHORS.me,
        text: text,
        date: new Intl.DateTimeFormat('ru-RU', DATEOPTIONS).format(new Date()),
      };

      submit(message);
      setText('');
    }
  };

  const handlerChange = (event) => {
    setText(event.target.value);
  };

  return (
    <form className="form" onSubmit={handlerSubmit}>
      <label className="form__label">Type your message here:</label>
      <div className="form__actions">
        <input
          className="form__input"
          type="text"
          onChange={handlerChange}
          value={text}
        />
        <button className="form__btn" type="submit">
          Send
        </button>
      </div>
    </form>
  );
};
