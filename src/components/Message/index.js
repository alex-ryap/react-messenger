import './style.scss';

export const Message = ({ message, author }) => {
  const classes = author.name === 'Me' ? 'message message__right' : 'message';

  return (
    <li>
      <div className={classes}>
        {author.name !== 'Me' && (
          <img className="message__avatar" src={author.avatar} alt="user" />
        )}
        <div className="message__content">
          <div className="message__text">{message.text}</div>
          <span className="message__date">{message.date}</span>
        </div>
      </div>
    </li>
  );
};
