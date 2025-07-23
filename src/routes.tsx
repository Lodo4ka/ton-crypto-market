import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Profile from './pages/Main';
import { BottomNavbar } from './shared/ui/bottom-navbar/BottomNavbar';

const AppRouter: React.FC = () => (
  <BrowserRouter>
    <div className="w-full max-w-[576px] mx-auto px-[16px] py-[30px]">
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="*" element={<Profile />} />
      </Routes>
    </div>
    <BottomNavbar />
  </BrowserRouter>
);

export default AppRouter;
