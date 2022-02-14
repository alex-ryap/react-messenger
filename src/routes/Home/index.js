import { Sidebar } from '../../components/Sidebar';
import { UserProfile } from '../../components/UserProfile';

import './style.scss';

export const Home = () => {
  return (
    <>
      <Sidebar />
      <div className="home__content">
        <h1 className="home__title">Welcome back!</h1>
        <UserProfile />
      </div>
    </>
  );
};
