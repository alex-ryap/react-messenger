import { Message } from './components/Message/Message';
import { useState, useEffect, useCallback } from 'react';
import { InputMessage } from './components/InputMessage/InputMessage';
import { AUTHORS, DATEOPTIONS } from './utils/constants';
import { v4 as uuid } from 'uuid';
import './App.scss';

function App() {
  const [messageList, setMessageList] = useState([]);

  const addNewMessage = useCallback((message) => {
    message.id = uuid();
    setMessageList((prevMessageList) => [...prevMessageList, message]);
  }, []);

  useEffect(() => {
    if (
      messageList.length &&
      messageList[messageList.length - 1].author === 'Me'
    ) {
      const timeout = setTimeout(
        () =>
          addNewMessage({
            author: AUTHORS.robot,
            text: 'Hello, i am Robot',
            date: new Intl.DateTimeFormat('ru-RU', DATEOPTIONS).format(
              new Date()
            ),
          }),
        2000
      );

      return () => clearTimeout(timeout);
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
