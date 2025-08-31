import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Profile from '../pages/Profile.tsx';
import { BottomNavbar } from '../shared/ui/bottom-navbar/BottomNavbar.tsx';
import { PlayButton } from '../shared/ui/play-button/PlayButton.tsx';
import { useAppSelector } from './hooks.ts';
import { Inventory } from '../pages/Inventory.tsx';
import { MainLayout } from './layouts/MainLayout.tsx';
import { Market } from '../pages/Market.tsx';
import { Game } from '../pages/Game.tsx';
import { GameFree } from '../pages/GameFree.tsx';
import { NFTDetail } from '../pages/NFTDetail.tsx';
import { StickerPack } from '../pages/StickerPack.tsx';
import { GamePage } from '../pages/GamePage/GamePage.tsx';
import { SkinPage } from '../pages/SkinPage/SkinPage.tsx';
import { LootBoxPage } from '../pages/LootBoxPage/LootBoxPage.tsx';
import { LootBoxPageOverview } from '../pages/LootBoxPageOverview/LootBoxPageOverview.tsx';

const BottomBarSwitch: React.FC = () => {
  const location = useLocation();
  const playLabel = useAppSelector((s) => s.playButton.label);
  const path = location.pathname;
  const idPathRegex = /^\/(nft|sticker-pack|game|skin|lootbox|lootbox-overview)\/[^/]+$/;
  const shouldShowPlay = idPathRegex.test(path) || path.includes('links');

  if (shouldShowPlay) {
    return (
      <div className="w-full bg-[#151413] py-2 border-t border-[#232323] fixed bottom-0 z-10">
        <div className="w-full max-w-[576px] mx-auto px-[16px]">
          <PlayButton className="!py-3">{playLabel}</PlayButton>
        </div>
      </div>
    );
  }

  return <BottomNavbar />;
};

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
          <Route path="/game/:id" element={<GamePage />} />
          <Route path="/skin/:id" element={<SkinPage />} />
          <Route path="/lootbox/:id" element={<LootBoxPage />} />
          <Route path="/lootbox-overview/:id/" element={<LootBoxPageOverview />} />
          <Route path="*" element={<Profile />} />
        </Routes>
      </MainLayout>
    </div>
    <BottomBarSwitch />
  </BrowserRouter>
);

export default AppRouter;
