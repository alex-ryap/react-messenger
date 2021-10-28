import { Message } from './components/Message/Message';
import './App.css';
import { useState } from 'react';
import { InputMessage } from './components/InputMessage/InputMessage';

function App() {
  const [text, setText] = useState('Some message');

  return (
    <div className="App">
      <Message message={text} />
      <InputMessage change={setText} />
    </div>
  );
}

export default App;
