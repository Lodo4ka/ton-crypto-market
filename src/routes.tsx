import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Profile from './pages/Main';

const AppRouter: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Profile />} />
      <Route path="*" element={<Profile />} />
    </Routes>
  </BrowserRouter>
);

export default AppRouter;
