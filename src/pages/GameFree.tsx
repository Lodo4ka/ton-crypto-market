import { useState } from 'react';
import { GameBanner } from '../shared/ui/game-banner/GameBanner';
import { GameInfo } from '../shared/ui/game-info/GameInfo';
import { LootboxGrid } from '../shared/ui/lootbox-grid/LootboxGrid';
import { PlayButton } from '../shared/ui/play-button/PlayButton';
import NavbarTabs from '../shared/ui/navbar-tabs/NavbarTabs';
import type { Tab } from '../shared/ui/navbar-tabs/NavbarTabs.props';

// Mock data
const GAME_IMAGES = [
  'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=600&fit=crop&crop=center',
];

const GAME_ICON = 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=100&h=100&fit=crop&crop=center';

const LOOTBOXES = [
  {
    id: '1',
    name: 'Godlike Box',
    rarity: 'LEGENDARY' as const,
    image: '/src/assets/lootbox/car.png',
  },
  {
    id: '2',
    name: 'Aqua Box',
    rarity: 'RARE' as const,
    image: '/src/assets/lootbox/gloves.png',
  },
  {
    id: '3',
    name: 'Champion Box',
    rarity: 'EPIC' as const,
    image: '/src/assets/lootbox/car.png',
  },
  {
    id: '4',
    name: 'Glitch Box',
    rarity: 'UNCOMMON' as const,
    image: '/src/assets/lootbox/gloves.png',
  },
];

const TABS: Tab[] = [
  { label: 'Loot boxes', value: 'lootboxes' },
  { label: 'Assets', value: 'assets' },
];

export const GameFree = () => {
  const [activeTab, setActiveTab] = useState('lootboxes');

  const handleLootboxClick = (lootbox: any) => {
    console.log('Lootbox clicked:', lootbox);
  };

  const handleGetFreeClick = () => {
    console.log('Get Free button clicked');
  };

  return (
    <div className="min-h-screen bg-[var(--tg-bg-black)] text-white px-4 pb-20">
      {/* Game Banner */}
      <GameBanner images={GAME_IMAGES} className="mb-6" />

      {/* Game Info */}
      <GameInfo
        icon={GAME_ICON}
        title="Top Speed: Racing Legends"
        players="300k total players"
        description="Become a street racing legend! Beat criminal overlords and become the biggest fish in the city! Dominate your criminally insane rivals in extreme head-to-head drag races."
        className="mb-6"
      />

      {/* Tabs */}
      <NavbarTabs
        tabs={TABS}
        activeTab={activeTab}
        onTabClick={setActiveTab}
        className="mb-6"
      />

      {/* Content based on active tab */}
      {activeTab === 'lootboxes' && (
        <LootboxGrid
          lootboxes={LOOTBOXES}
          onLootboxClick={handleLootboxClick}
          className="mb-8"
        />
      )}

      {activeTab === 'assets' && (
        <div className="text-center text-gray-400 py-12">
          Assets content coming soon...
        </div>
      )}

      {/* Get Free Button */}
      <div className="fixed bottom-20 left-4 right-4">
        <PlayButton text="Get Free" onClick={handleGetFreeClick} />
      </div>
    </div>
  );
};
