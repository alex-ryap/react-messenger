import './style.scss';

export const Options = ({ position, close, onDelete }) => {
  return (
    <div className="options" onClick={close}>
      <div className="options__content">
        <div
          className="options__layout"
          style={{ top: position.y, left: position.x - 100 }}
        >
          <ul className="options__list">
            <li className="options__item">
              <span>Edit</span>
            </li>
            <li className="options__item" onClick={onDelete}>
              <span className="options__item-red">Delete</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
