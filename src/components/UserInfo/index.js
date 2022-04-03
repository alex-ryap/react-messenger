import './style.scss';

export const UserInfo = ({ user, direction = 'row', size = 50 }) => {
  return (
    <div className="author" style={{ flexDirection: direction }}>
      <img
        className="author__photo"
        src={user.avatar}
        alt="author pic"
        style={{ width: size }}
      />
      <div
        className="author__info"
        style={
          direction === 'column'
            ? { paddingTop: '20px', fontSize: '22px' }
            : { paddingLeft: '20px' }
        }
      >
        <p className="author__name">{user.name}</p>
      </div>
    </div>
  );
};
