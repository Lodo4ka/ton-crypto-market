import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Profile from '../pages/Profile.tsx';
import { BottomNavbar } from '../shared/ui/bottom-navbar/BottomNavbar.tsx';
import { Inventory } from '../pages/Inventory.tsx';
import { MainLayout } from './layouts/MainLayout.tsx';
import { Market } from '../pages/Market.tsx';
import { Game } from '../pages/Game.tsx';
import { GameFree } from '../pages/GameFree.tsx';
import { NFTDetail } from '../pages/NFTDetail.tsx';
import { StickerPack } from '../pages/StickerPack.tsx';

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
