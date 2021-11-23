import { Provider } from 'react-redux';
import './App.scss';
import { RoutesApp } from './routes';
import { store } from './store';

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
