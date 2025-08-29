import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Profile from '../pages/Profile';
import { BottomNavbar } from '../shared/ui/bottom-navbar/BottomNavbar';
import { Inventory } from '../pages/Inventory';
import { MainLayout } from './layouts/MainLayout';
import { Market } from '../pages/Market';
import { Game } from '../pages/Game';
import { GameFree } from '../pages/GameFree';
import { NFTDetail } from '../pages/NFTDetail';
import { StickerPack } from '../pages/StickerPack';

const AppRouter: React.FC = () => (
  <BrowserRouter>
    <div className="w-full max-w-[576px] mx-auto px-[16px] py-[30px]">
      <MainLayout>
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/market" element={<Market />} />
          <Route path="/game" element={<Game />} />
          <Route path="/game-free" element={<GameFree />} />
          <Route path="/nft/:id" element={<NFTDetail />} />
          <Route path="/sticker-pack/:id" element={<StickerPack />} />
          <Route path="*" element={<Profile />} />
        </Routes>
      </MainLayout>
    </div>
    <BottomNavbar />
  </BrowserRouter>
);

export default AppRouter;
