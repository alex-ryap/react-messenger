import './style.scss';

export const EditableField = ({ title, type = 'text', value }) => {
  return (
    <div className="editable-field">
      <p className="editable-field__name">{title}:</p>
      <input className="editable-field__value" type={type} value={value} />
    </div>
  );
};
