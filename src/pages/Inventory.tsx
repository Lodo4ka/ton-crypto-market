import { useState } from 'react';
import NavbarTabs from '../shared/ui/navbar-tabs/NavbarTabs.tsx';
import type { Tab } from '../shared/ui/navbar-tabs/NavbarTabs.props.ts';
import { TextField } from '../shared/ui/text-field/TextField.tsx';
import { StickerTab } from './StickerTab.tsx';
import { SkinTab } from './SkinTab.tsx';

const TABS: Tab[] = [
  { label: 'Stickers', value: 'stickers' },
  { label: 'Skins', value: 'skins' },
  { label: 'Lootboxes', value: 'lootboxes' },
];

export const Inventory = () => {
  const [activeTab, setActiveTab] = useState('stickers');
  const [searchValue, setSearchValue] = useState('');

  return (
    <div className="flex flex-col gap-[16px]">
      <TextField type="search" value={searchValue} onChange={setSearchValue} placeholder="Search" />
      <NavbarTabs tabs={TABS} activeTab={activeTab} onTabClick={setActiveTab} />

      {/* Collections Section */}
      <div className="flex flex-col gap-4">
        {activeTab === 'stickers' && <StickerTab />}
        {activeTab === 'skins' && <SkinTab />}
      </div>
    </div>
  );
};
