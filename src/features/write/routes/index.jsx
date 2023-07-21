import { Navigate, Route, Routes } from 'react-router-dom';
import { Write } from './Write';

export const WriteRoutes = () => {
  return (
    <Routes>
      <Route path=":category" element={<Write />} />
      <Route path="*" element={<Navigate to="." />} />
    </Routes>
  );
};
