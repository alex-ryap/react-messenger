import './Message.scss';

export const Message = ({ message }) => {
  return (
    <div>
      <h1 className="message">
        <span className="message__label">Message:</span> {message}
      </h1>
    </div>
  );
};
