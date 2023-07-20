import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { Location } from './Location';
import { LocationInfomation } from './LocationInfomation';

export const LocationRoutes = () => {
  const location = useLocation();
  console.log(location);
  return (
    <Routes>
      <Route path="" element={<Location />} />
      <Route path="/infomation/:location" element={<LocationInfomation />} />
      <Route path="*" element={<Navigate to="." />} />
    </Routes>
  );
};
