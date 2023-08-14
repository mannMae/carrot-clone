import { Navigate, Route, Routes } from 'react-router-dom';
import { Auth } from './Auth';
import { Login } from './Login';
import { Register } from './Register';

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<Auth />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<Navigate to="." />} />
    </Routes>
  );
};
