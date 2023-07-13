import { Navigate, Route, Routes } from 'react-router-dom';

import { Market } from './Market';
import { MarketDetail } from './MarketDetail';

export const MarketRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<Market />} />
      <Route path=":postId" element={<MarketDetail />} />
      <Route path="*" element={<Navigate to="." />} />
    </Routes>
  );
};
