import { Message } from './components/Message/Message';
import { useState, useEffect } from 'react';
import { InputMessage } from './components/InputMessage/InputMessage';
import './App.scss';

function App() {
  const [messageId, setMessageId] = useState(1);
  const [messageList, setMessageList] = useState([]);

  // Need use callback with prevState
  const addNewMessage = (text, author = 'Me') => {
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
    };
    const message = {
      id: messageId,
      author: author,
      text: text,
      date: new Intl.DateTimeFormat('ru-RU', options).format(new Date()),
    };

    setMessageList([...messageList, message]);
    setMessageId(messageId + 1);
  };

  // Line 34:6:  React Hook useEffect has a missing dependency: 'addNewMessage'. Either include it or remove the dependency array
  useEffect(() => {
    if (messageList.length >= 1) {
      if (messageList[messageList.length - 1].author === 'Me') {
        setTimeout(() => addNewMessage('Hello, i am Robot', 'Robot'), 2000);
      }
    }
  }, [messageList]);

  return (
    <div className="App">
      <div className="container-fluid">
        <div className="chat">
          <div className="chat__header">
            <h3>
              Chat with <span>Robot</span>
            </h3>
          </div>
          <div className="chat__history">
            <div className="messages">
              {messageList.map((message) => {
                return <Message message={message} key={message.id} />;
              })}
            </div>
          </div>
          <div className="chat__form">
            <InputMessage submit={addNewMessage} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
