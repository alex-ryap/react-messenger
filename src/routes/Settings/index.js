import { PageTitle } from '../../components/PageTittle';
import { Sidebar } from '../../components/Sidebar';
import './style.scss';

export const Settings = () => {
  return (
    <>
      <Sidebar />
      <div className="settings">
        <div className="settings__wrapper">
          <div className="settings__header">
            <PageTitle title="settings" subtitle="Chat settings" />
          </div>
          <div className="settings__content"></div>
        </div>
      </div>
    </>
  );
};
