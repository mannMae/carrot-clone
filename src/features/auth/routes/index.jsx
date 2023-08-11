import { Navigate, Route, Routes } from 'react-router-dom';
import { Auth } from './Auth';
import { Login } from './Login';

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<Auth />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Navigate to="." />} />
    </Routes>
  );
};
