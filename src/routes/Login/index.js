import { useState } from 'react';
import { SignForm } from '../../components/SignForm';
import { logIn } from '../../services/firebase';
import './style.scss';

export const Login = () => {
  const [error, setError] = useState('');
  const [showError, setShowError] = useState(false);

  const handleLogIn = async (email, password) => {
    try {
      await logIn(email, password);
    } catch (err) {
      console.log(err);
      setError(err);
      setShowError(true);
    }
  };

  const handlerShowError = () => {
    setShowError(false);
  };

  const content = {
    title: 'Welcome',
    subtitle: 'Enter your credentials to access your account',
    btnText: 'Sing In',
    text: 'Not a member?',
    link: '/register',
    linkText: 'Sing up',
  };

  return (
    <SignForm
      content={content}
      onSubmit={handleLogIn}
      error={error}
      showError={showError}
    />
  );
};
