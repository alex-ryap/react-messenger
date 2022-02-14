import { Profile } from '../routes/Profile';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from '../routes/Home';
import { Chats } from '../routes/Chats';
import { Contacts } from './Contacts';
import { Notifications } from './Notifications';
import { Calendar } from './Calendar';
import { Settings } from './Settings';
import { Login } from './Login';
import { PublicRoute } from '../components/PublicRoute';
import { PrivateRoute } from '../components/PrivateRoute';
import { SignUp } from './SignUp';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { auth } from '../services/firebase';
import { singIn } from '../store/Profile/actions';
import { signOut } from '../store/Profile/actions';

export const RoutesApp = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(singIn());
      } else {
        dispatch(signOut());
      }
    });

    return unsubscribe;
    // eslint-disable-next-line
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route
            path="login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="register"
            element={
              <PublicRoute>
                <SignUp />
              </PublicRoute>
            }
          />
          <Route path="chats">
            <Route
              index
              element={
                <PrivateRoute>
                  <Chats />
                </PrivateRoute>
              }
            />
            <Route
              path=":chatId"
              element={
                <PrivateRoute>
                  <Chats />
                </PrivateRoute>
              }
            />
          </Route>
          <Route
            path="profile"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />
          <Route path="contacts">
            <Route
              index
              element={
                <PrivateRoute>
                  <Contacts />
                </PrivateRoute>
              }
            />
            <Route
              path=":userId"
              element={
                <PrivateRoute>
                  <Contacts />
                </PrivateRoute>
              }
            />
          </Route>
          <Route
            path="notifications"
            element={
              <PrivateRoute>
                <Notifications />
              </PrivateRoute>
            }
          />
          <Route
            path="calendar"
            element={
              <PrivateRoute>
                <Calendar />
              </PrivateRoute>
            }
          />
          <Route
            path="settings"
            element={
              <PrivateRoute>
                <Settings />
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
