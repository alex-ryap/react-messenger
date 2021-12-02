import { Provider } from 'react-redux';
import { RoutesApp } from './routes';
import { store } from './store';

import './App.scss';

function App() {
  return (
    <>
      <Provider store={store}>
        <RoutesApp />
      </Provider>
    </>
  );
}

export default App;
