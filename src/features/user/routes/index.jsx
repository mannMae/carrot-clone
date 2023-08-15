import { Route, Routes } from 'react-router-dom';
import { User } from './User';
import { Profile } from './Profile';

export const UserRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<User />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
};
