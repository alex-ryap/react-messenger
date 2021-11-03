import './Message.scss';

export const Message = ({ message }) => {
  const classes = message.author === 'Me' ? 'message' : 'message message__left';

  return (
    <span className={classes}>
      <span className="message__text">{message.text}</span>
      <span className="message__info">
        {message.author}, {message.date}
      </span>
    </span>
  );
};
