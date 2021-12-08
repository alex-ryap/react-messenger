import { Provider } from 'react-redux';
import { RoutesApp } from './routes';
import { PersistGate } from 'redux-persist/es/integration/react';
import { persistor, store } from './store';

import './App.scss';

export const App = () => {
  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <RoutesApp />
        </PersistGate>
      </Provider>
    </>
  );
};
