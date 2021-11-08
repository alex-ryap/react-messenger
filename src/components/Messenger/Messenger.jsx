import { InputMessage } from '../InputMessage/InputMessage';
import { AUTHORS, DATEOPTIONS } from '../../utils/constants';
import { useState, useEffect, useCallback } from 'react';
import { v4 as uuid } from 'uuid';

import './Messanger.scss';
import { Grid } from '@mui/material';
import Sidebar from '../Sidebar/Sidebar';
import MessagesHistory from '../MessagesHistory/MessagesHistory';

const listOfChats = [
  {
    id: 1,
    name: 'John',
    surname: 'Smith',
    avatar: 'https://picsum.photos/51',
    lastMessage: 'Hi, Bob!',
  },
  {
    id: 2,
    name: 'Frank',
    surname: 'Liker',
    avatar: 'https://picsum.photos/52',
    lastMessage: 'Bye!',
  },
  {
    id: 3,
    name: 'Mary',
    surname: 'Griffin',
    avatar: 'https://picsum.photos/53',
    lastMessage: 'Okey',
  },
  {
    id: 4,
    name: 'Jane',
    surname: 'Taylor',
    avatar: 'https://picsum.photos/54',
    lastMessage: 'Thank you)',
  },
  {
    id: 5,
    name: 'Jane',
    surname: 'Taylor',
    avatar: 'https://picsum.photos/55',
    lastMessage: 'Thank you)',
  },
];

export default function Messenger() {
  const [chats, setChats] = useState(listOfChats);
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
    <Grid container sx={{ px: 2 }}>
      <Grid item md={3}>
        <Sidebar chats={chats} />
      </Grid>
      <Grid item md={9}>
        <MessagesHistory messageList={messageList} />
        <InputMessage submit={addNewMessage} />
      </Grid>
    </Grid>
  );
}
