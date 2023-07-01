import { Route, Routes } from 'react-router-dom';
import { Around } from './Around';

export const AroundRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<Around />} />
    </Routes>
  );
};
