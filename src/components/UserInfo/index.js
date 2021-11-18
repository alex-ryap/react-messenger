import './style.scss';

export const UserInfo = ({ user }) => {
  return (
    <div className="author">
      <img className="author__photo" src={user.avatar} alt="author pic" />
      <div className="author__info">
        <p className="author__name">{user.name}</p>
      </div>
    </div>
  );
};
