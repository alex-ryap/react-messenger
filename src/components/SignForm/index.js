import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from '../Button';
import { Input } from '../Input';
import { Toast } from '../Toast';
import './style.scss';

export const SignForm = ({ onSubmit, content, error, showError, loading }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const changeEmail = (e) => {
    setEmail(e.target.value);
  };

  const changePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const authEmail = email;
    const authPassword = password;

    setEmail('');
    setPassword('');
    onSubmit(authEmail, authPassword);
  };

  return (
    <>
      {error && (
        <Toast
          type="error"
          message={error}
          showError={showError}
          icon="fa-exclamation-triangle"
        />
      )}
      <div className="login">
        <div className="login__content">
          <form className="login__form" onSubmit={handleSubmit}>
            <h2 className="title">{content.title}</h2>
            <p className="subtitle">{content.subtitle}</p>
            <span className="mt-50"></span>
            <Input
              placeholder="Enter your email"
              icon="fa-envelope"
              onChange={changeEmail}
              value={email}
            />
            <span className="mt-10"></span>
            <Input
              type="password"
              placeholder="Enter your password"
              icon="fa-lock"
              onChange={changePassword}
              value={password}
            />
            <span className="mt-20"></span>
            <Button title={content.btnText} />
            <p className="register">
              {content.text}
              <NavLink className="register__link" to={content.link}>
                {content.linkText}
              </NavLink>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};
