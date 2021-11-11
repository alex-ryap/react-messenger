import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './routes/Home';
import { Chats } from './routes/Chats';
import human1 from './img/human1.png';
import human2 from './img/human2.png';
import human3 from './img/human3.png';
import { v4 as uuid } from 'uuid';
import './App.scss';
import { useCallback, useState } from 'react';

const chatsList = [
  {
    id: 1,
    user: {
      avatar: human1,
      name: 'Lilly Robin',
    },
    messages: [
      {
        id: uuid(),
        author: {
          avatar: human1,
          name: 'Lilly Robin',
        },
        text: 'Hi, Henry',
        date: '2 minutes ago',
      },
      {
        id: uuid(),
        author: {
          avatar: human1,
          name: 'Lilly Robin',
        },
        text: 'How are you?',
        date: '2 minutes ago',
      },
    ],
    lastMessage: {
      id: uuid(),
      author: {
        avatar: human1,
        name: 'Lilly Robin',
      },
      text: 'How are you?',
      date: '2 minutes ago',
    },
    newMessagesCount: 1,
  },
  {
    id: 2,
    user: {
      avatar: human2,
      name: 'Bob Williams',
    },
    messages: [
      {
        id: uuid(),
        author: {
          avatar: human2,
          name: 'Bob Williams',
        },
        text: 'Where are you?',
        date: '12 minute ago',
      },
    ],
    lastMessage: {
      id: uuid(),
      author: {
        avatar: human2,
        name: 'Bob Williams',
      },
      text: 'Where are you?',
      date: '12 minute ago',
    },
    newMessagesCount: 0,
  },
  {
    id: 3,
    user: {
      avatar: human3,
      name: 'Mary Grace',
    },
    messages: [
      {
        id: uuid(),
        author: {
          avatar: human3,
          name: 'Mary Grace',
        },
        text: `Most of its text is made up from sections 1.10.32–3 of Cicero's De finibus bonorum et malorum (On the Boundaries of Goods and Evils; finibus may also be translated as purposes).`,
        date: '25 minute ago',
      },
    ],
    lastMessage: {
      id: uuid(),
      author: {
        avatar: human3,
        name: 'Mary Grace',
      },
      text: `Most of its text is made up from sections 1.10.32–3 of Cicero's De finibus bonorum et malorum (On the Boundaries of Goods and Evils; finibus may also be translated as purposes).`,
      date: '25 minute ago',
    },
    newMessagesCount: 0,
  },
  {
    id: 4,
    user: {
      avatar: human1,
      name: 'Ron Ashley',
    },
    messages: [
      {
        id: uuid(),
        author: {
          avatar: human3,
          name: 'Ron Ashley',
        },
        text: 'Go to lunch',
        date: '1 hour ago',
      },
    ],
    lastMessage: {
      id: uuid(),
      author: {
        avatar: human3,
        name: 'Ron Ashley',
      },
      text: 'Go to lunch',
      date: '1 hour ago',
    },
    newMessagesCount: 0,
  },
];

function App() {
  const [chats, setChats] = useState(chatsList);

  const addNewMessage = useCallback((message, id) => {
    console.log(id, message);
  });

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="chats">
            <Route
              index
              element={<Chats chatsList={chats} sendMessage={addNewMessage} />}
            />
            <Route
              path=":chatId"
              element={<Chats chatsList={chats} sendMessage={addNewMessage} />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
