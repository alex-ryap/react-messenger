import { Message } from './components/Message/Message';
import './App.css';
import { useState } from 'react';
import { InputMessage } from './components/InputMessage/InputMessage';

function App() {
  let [text, setText] = useState('Some message');

  return (
    <div className="App">
      <Message message={text} />
      <InputMessage submit={(message) => setText(message)} />
    </div>
  );
}

export default App;
