import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import './style.scss';
import { useDispatch } from 'react-redux';
import { addMessageFromBot } from '../../store/Messages/actions';

export const InputMessage = ({ chatId }) => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (text) {
      const message = {
        id: uuid(),
        author: 0,
        text: text,
        date: 'now',
        isRead: true,
      };

      dispatch(addMessageFromBot({ id: chatId, message }));
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
