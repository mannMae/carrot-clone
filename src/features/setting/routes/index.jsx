import { Navigate, Route, Routes } from 'react-router-dom';
import { Setting } from './Setting';
import { UserInfo } from './UserInfo';

export const SettingRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<Setting />} />
      <Route path="/user/info/*" element={<UserInfo />} />
      <Route path="*" element={<Navigate to="." />} />
    </Routes>
  );
};
