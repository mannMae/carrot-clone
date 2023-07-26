import { Navigate, Route, Routes } from 'react-router-dom';
import { ChatList } from './ChatList';
import { Chat } from './Chat';

export const ChatRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<ChatList />} />
      <Route path=":chatId" element={<Chat />} />
      <Route path="*" element={<Navigate to="." />} />
    </Routes>
  );
};
