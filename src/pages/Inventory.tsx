import { useState } from 'react';
import NavbarTabs from '../shared/ui/navbar-tabs/NavbarTabs';
import type { Tab } from '../shared/ui/navbar-tabs/NavbarTabs.props';
import { SearchLootBox } from '../features/lootbox/ui/SearchLootBox';

const TABS: Tab[] = [
  { label: 'Unlisted', value: 'unlisted' },
  { label: 'Listed', value: 'listed' },
];

export const Inventory = () => {
  const [activeTab, setActiveTab] = useState('unlisted');
  const [searchValue, setSearchValue] = useState('');

  const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const onSort = () => {
    console.log('sort');
  };

  const onFilter = () => {
    console.log('filter');
  };

  return (
    <div className="flex flex-col gap-[16px]">
      <SearchLootBox
        searchValue={searchValue}
        handleSearchChange={onSearchChange}
        onSort={onSort}
        onFilter={onFilter}
      />
      <NavbarTabs tabs={TABS} activeTab={activeTab} onTabClick={setActiveTab} />
    </div>
  );
};
