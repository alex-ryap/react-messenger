import './InputMessage.scss';

export const InputMessage = ({ submit }) => {
  function handleChange(event) {
    submit(event.target.value);
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
