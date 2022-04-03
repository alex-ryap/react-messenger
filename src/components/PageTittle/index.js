import './style.scss';

export const PageTitle = ({ title, subtitle }) => {
  return (
    <div className="chats__title">
      {title && <h3 className="title">{title}</h3>}
      {subtitle && <p className="subtitle">{subtitle}</p>}
    </div>
  );
};
