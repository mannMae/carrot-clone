import { Navigate, Route, Routes } from 'react-router-dom';
import { Search } from './Search';
import { SearchResult } from './SearchResult';

export const SearchRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<Search />} />
      <Route path="/result/:keyword" element={<SearchResult />} />
      <Route path="*" element={<Navigate to="." />} />
    </Routes>
  );
};
