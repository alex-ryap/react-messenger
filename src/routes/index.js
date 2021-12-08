import { Profile } from '../routes/Profile';
import { Sidebar } from '../components/Sidebar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from '../routes/Home';
import { Chats } from '../routes/Chats';
import { Contacts } from './Contacts';
import { Notifications } from './Notifications';
import { Calendar } from './Calendar';
import { Settings } from './Settings';

export const RoutesApp = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Sidebar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="chats">
            <Route index element={<Chats />} />
            <Route path=":chatId" element={<Chats />} />
          </Route>
          <Route path="profile" element={<Profile />} />
          <Route path="contacts">
            <Route index element={<Contacts />} />
            <Route path=":userId" element={<Contacts />} />
          </Route>
          <Route path="notifications" element={<Notifications />} />
          <Route path="calendar" element={<Calendar />} />
          <Route path="settings" element={<Settings />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
