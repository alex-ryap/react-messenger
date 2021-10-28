import './InputMessage.scss';

export const InputMessage = ({ change }) => {
  function handleChange(event) {
    change(event.target.value);
  }

  return (
    <form className="form">
      <label className="form__label" htmlFor="">
        Type your message here:
      </label>
      <input className="form__input" type="text" onChange={handleChange} />
    </form>
  );
};
