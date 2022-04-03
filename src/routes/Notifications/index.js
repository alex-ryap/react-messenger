import { PageTitle } from '../../components/PageTittle';
import { Sidebar } from '../../components/Sidebar';
import './style.scss';

export const Notifications = () => {
  return (
    <>
      <Sidebar />
      <div className="notifications">
        <div className="notifications__wrapper">
          <div className="notifications__header">
            <PageTitle title="Notifications" subtitle="Recent notifications" />
          </div>
          <div className="notifications__content">
            <p>No new notifications</p>
          </div>
        </div>
      </div>
    </>
  );
};
