import { useState } from 'react';
import NavbarTabs from '../shared/ui/navbar-tabs/NavbarTabs';
import type { Tab } from '../shared/ui/navbar-tabs/NavbarTabs.props';
import { Search } from '../shared/ui/search/Search';
import { Unlisted } from '../widgets/inventory/Unlisted';
import { Listed } from '../widgets/inventory/Listed';
import type { LootboxInventoryProps } from '../entities/LootboxInventory/ui/LootboxInventory.props';

export const Inventory = () => {
  const TABS: Tab[] = [
    { label: 'Unlisted', value: 'unlisted' },
    { label: 'Listed', value: 'listed' },
  ];

  const [activeTab, setActiveTab] = useState('unlisted');
  const [searchValue, setSearchValue] = useState('');

  const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className="flex flex-col gap-[16px]">
      <Search value={searchValue} onChange={onSearchChange} />
      <NavbarTabs tabs={TABS} activeTab={activeTab} onTabClick={setActiveTab} />
      {activeTab === 'unlisted' && <Unlisted />}
      {activeTab === 'listed' && <Listed />}
    </div>
  );
};
