import { Profile } from '../routes/Profile';
import { Sidebar } from '../components/Sidebar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from '../routes/Home';
import { Chats } from '../routes/Chats';

// const chatsList = {
//   [uuid()]: {
//     user: {
//       avatar: human1,
//       name: 'Lilly Robin',
//     },
//     messages: [
//       {
//         id: uuid(),
//         author: {
//           avatar: human1,
//           name: 'Lilly Robin',
//         },
//         text: 'Hi, Henry',
//         date: '2 minutes ago',
//       },
//       {
//         id: uuid(),
//         author: {
//           avatar: human1,
//           name: 'Lilly Robin',
//         },
//         text: 'How are you?',
//         date: '2 minutes ago',
//       },
//     ],
//     lastMessage: {
//       id: uuid(),
//       author: {
//         avatar: human1,
//         name: 'Lilly Robin',
//       },
//       text: 'How are you?',
//       date: '2 minutes ago',
//     },
//     newMessagesCount: 1,
//   },
//   [uuid()]: {
//     user: {
//       avatar: human2,
//       name: 'Bob Williams',
//     },
//     messages: [
//       {
//         id: uuid(),
//         author: {
//           avatar: human2,
//           name: 'Bob Williams',
//         },
//         text: 'Where are you?',
//         date: '12 minute ago',
//       },
//     ],
//     lastMessage: {
//       id: uuid(),
//       author: {
//         avatar: human2,
//         name: 'Bob Williams',
//       },
//       text: 'Where are you?',
//       date: '12 minute ago',
//     },
//     newMessagesCount: 0,
//   },
//   [uuid()]: {
//     user: {
//       avatar: human3,
//       name: 'Mary Grace',
//     },
//     messages: [
//       {
//         id: uuid(),
//         author: {
//           avatar: human3,
//           name: 'Mary Grace',
//         },
//         text: `Most of its text is made up from sections 1.10.32–3 of Cicero's De finibus bonorum et malorum (On the Boundaries of Goods and Evils; finibus may also be translated as purposes).`,
//         date: '25 minute ago',
//       },
//     ],
//     lastMessage: {
//       id: uuid(),
//       author: {
//         avatar: human3,
//         name: 'Mary Grace',
//       },
//       text: `Most of its text is made up from sections 1.10.32–3 of Cicero's De finibus bonorum et malorum (On the Boundaries of Goods and Evils; finibus may also be translated as purposes).`,
//       date: '25 minute ago',
//     },
//     newMessagesCount: 0,
//   },
//   [uuid()]: {
//     user: {
//       avatar: human1,
//       name: 'Ron Ashley',
//     },
//     messages: [
//       {
//         id: uuid(),
//         author: {
//           avatar: human3,
//           name: 'Ron Ashley',
//         },
//         text: 'Go to lunch',
//         date: '1 hour ago',
//       },
//     ],
//     lastMessage: {
//       id: uuid(),
//       author: {
//         avatar: human3,
//         name: 'Ron Ashley',
//       },
//       text: 'Go to lunch',
//       date: '1 hour ago',
//     },
//     newMessagesCount: 0,
//   },
// };

export const RoutesApp = () => {
  // const [chats, setChats] = useState(chatsList);

  // const addNewMessage = useCallback((message, id) => {
  //   setChats((prevState) => ({
  //     ...prevState,
  //     [id]: {
  //       ...prevState[id],
  //       messages: [...prevState[id].messages, message],
  //       lastMessage: message,
  //       newMessagesCount: 0,
  //     },
  //   }));
  // }, []);

  // const addNewChat = useCallback((name) => {
  //   const newChat = {
  //     user: {
  //       avatar: human1,
  //       name: name,
  //     },
  //     messages: [],
  //     lastMessage: {
  //       text: 'No messages',
  //       date: 'Now',
  //     },
  //     newMessagesCount: 0,
  //   };

  //   setChats((prevState) => ({
  //     ...prevState,
  //     [uuid()]: newChat,
  //   }));
  // }, []);

  // const deleteChat = useCallback(
  //   (id) => {
  //     const newChatList = { ...chats };
  //     delete newChatList[id];
  //     setChats(newChatList);
  //   },
  //   [chats]
  // );

  return (
    <div className="App">
      <BrowserRouter>
        <Sidebar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="chats">
            <Route index element={<Chats />} />
            <Route path=":chatId" element={<Chats />} />
          </Route>
          <Route path="profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
