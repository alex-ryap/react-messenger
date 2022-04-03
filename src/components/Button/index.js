import './style.scss';

export const Button = ({ title, icon, variant, eventClick }) => {
  return (
    <button className="btn" onClick={eventClick}>
      {icon && <i className={`fas ${icon} btn__icon`}></i>}
      {title}
    </button>
  );
};
