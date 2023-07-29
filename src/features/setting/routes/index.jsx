import { Navigate, Route, Routes } from 'react-router-dom';
import { Setting } from './Setting';
import { UserInfo } from './UserInfo';
import { NotificationSetting } from './NotificationSetting';

export const SettingRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<Setting />} />
      <Route path="/notification/*" element={<NotificationSetting />} />
      <Route path="/user/*" element={<UserInfo />} />
      <Route path="*" element={<Navigate to="." />} />
    </Routes>
  );
};
