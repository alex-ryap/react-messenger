import { useState } from 'react';
import { SignForm } from '../../components/SignForm';
import { signUp } from '../../services/firebase';
import './style.scss';

export const SignUp = () => {
  const [error, setError] = useState('');

  const handleSignUp = async (email, password) => {
    try {
      await signUp(email, password);
    } catch (err) {
      console.log(err);
      setError(err.message);
    }
  };

  const content = {
    title: 'SignUp',
    subtitle: 'Enter your credentials to create your account',
    btnText: 'Sign Up',
    text: 'Already have an account?',
    link: '/login',
    linkText: 'Sing in',
  };

  return <SignForm content={content} onSubmit={handleSignUp} error={error} />;
};
