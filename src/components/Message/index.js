import './style.scss';

export const Message = ({ message, user }) => {
  const classes = message.author === 'Me' ? 'message' : 'message message__left';

  return (
    <li>
      <div className={classes}>
        <img src={user.avatar} alt="user" />
        <div className="message__content">
          <div className="message__text">{message.text}</div>
          <span className="message__date">{message.date}</span>
        </div>
      </div>
    </li>
  );
};
