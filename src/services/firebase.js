import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { getDatabase, ref } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyCaCAckyYw1vcbTpdjZlmc0HYjdwhpg6kc',
  authDomain: 'react-messenger-f20eb.firebaseapp.com',
  projectId: 'react-messenger-f20eb',
  storageBucket: 'react-messenger-f20eb.appspot.com',
  messagingSenderId: '544623080911',
  appId: '1:544623080911:web:0202ed55e4e82f08648eba',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const signUp = async (email, password) =>
  await createUserWithEmailAndPassword(auth, email, password);

export const logIn = async (email, password) =>
  await signInWithEmailAndPassword(auth, email, password);

export const logOut = async () => await signOut(auth);

export const db = getDatabase(app);
export const profileRef = ref(db, 'profile');
export const usersRef = ref(db, 'users');
export const chatsRef = ref(db, 'chats');
export const messagesRef = ref(db, 'messages');
export const getUserRefById = (userId) => ref(db, `users/${userId}`);
export const getChatRefById = (chatId) => ref(db, `chats/${chatId}`);
export const getChatMessagesRefById = (chatId) => ref(db, `messages/${chatId}`);
export const getMessagesRefById = (chatId) =>
  ref(db, `messages/${chatId}/messageList`);
