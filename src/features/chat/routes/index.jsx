import { Route, Routes } from 'react-router-dom';
import { ChatList } from './ChatList';

export const ChatRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<ChatList />} />
    </Routes>
  );
};
