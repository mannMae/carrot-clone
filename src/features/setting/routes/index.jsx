import { Navigate, Route, Routes } from 'react-router-dom';
import { Setting } from './Setting';
import { UserInfo } from './UserInfo';
import { NotificationSetting } from './NotificationSetting';
import { Announcement } from './Announcement';
import { Language } from './Language';
import { DeleteAccount } from './DeleteAccount';

export const SettingRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<Setting />} />
      <Route path="/notification/*" element={<NotificationSetting />} />
      <Route path="/user/*" element={<UserInfo />} />
      <Route path="/announcement/*" element={<Announcement />} />
      <Route path="/language" element={<Language />} />
      <Route path="/delete-account" element={<DeleteAccount />} />
      <Route path="*" element={<Navigate to="." />} />
    </Routes>
  );
};
