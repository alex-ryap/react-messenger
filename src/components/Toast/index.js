import { useEffect } from 'react';
import './style.scss';

export const Toast = ({ type, message, icon, showError }) => {
  useEffect(() => {
    setTimeout(() => {
      showError();
    }, 4000);
  });

  return (
    <div className={`toast ${type && 'toast-' + type}`}>
      <p>
        {icon && <i className={`fas ${icon} toast__icon`}></i>}
        {message}
      </p>
    </div>
  );
};
