import './style.scss';

export const Input = ({ type, placeholder, icon, onChange, value }) => {
  return (
    <div className="input">
      <input
        className="input__item"
        type={type ? type : 'text'}
        placeholder={placeholder ? placeholder : ''}
        onChange={onChange}
        value={value}
      />
      {icon && <i className={`fas ${icon} input__icon`}></i>}
    </div>
  );
};
