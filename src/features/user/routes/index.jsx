import { Route, Routes } from 'react-router-dom';
import { User } from './User';

export const UserRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<User />} />
    </Routes>
  );
};
