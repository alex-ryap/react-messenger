import { useState } from 'react';
import './InputMessage.scss';

export const InputMessage = ({ submit }) => {
  const [message, setMessage] = useState('');

  const handlerSubmit = (event) => {
    event.preventDefault();
    if (message) {
      submit(message);
      setMessage('');
    }
  };

  const handlerChange = (event) => {
    setMessage(event.target.value);
  };

  return (
    <form className="form" onSubmit={handlerSubmit}>
      <label className="form__label">Type your message here:</label>
      <div className="form__actions">
        <input
          className="form__input"
          type="text"
          onChange={handlerChange}
          value={message}
        />
        <button className="form__btn" type="submit">
          Send
        </button>
      </div>
    </form>
  );
};
