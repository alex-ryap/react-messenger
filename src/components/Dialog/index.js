import './style.scss';

export const Dialog = ({ title, save, close, children }) => {
  return (
    <div className="layout">
      <div className="dialog">
        <div className="dialog__header">
          <h2 className="dialog__title">{title}</h2>
        </div>
        <div className="dialog__content">{children}</div>
        <div className="dialog__actions">
          <button className="dialog__btn btn-success" onClick={save}>
            Save
          </button>
          <button className="dialog__btn btn-close" onClick={close}>
            Close
          </button>
        </div>
        <button className="dialog__close" onClick={close}>
          <i className="fas fa-times"></i>
        </button>
      </div>
    </div>
  );
};
