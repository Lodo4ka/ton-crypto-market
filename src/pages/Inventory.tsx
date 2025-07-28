import { useState } from 'react';
import NavbarTabs from '../shared/ui/navbar-tabs/NavbarTabs';
import type { Tab } from '../shared/ui/navbar-tabs/NavbarTabs.props';
import { Search } from '../shared/ui/search/Search';
import { Unlisted } from '../widgets/inventory/Unlisted';
import { Listed } from '../widgets/inventory/Listed';

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

  const onSort = () => {
    console.log('sort');
  };

  const onFilter = () => {
    console.log('filter');
  };

  return (
    <div className="flex flex-col gap-[16px]">
      <Search
        value={searchValue}
        onChange={onSearchChange}
        sorted={true}
        filtered={true}
        onSort={onSort}
        onFilter={onFilter}
      />
      <NavbarTabs tabs={TABS} activeTab={activeTab} onTabClick={setActiveTab} />
      {activeTab === 'unlisted' && <Unlisted />}
      {activeTab === 'listed' && <Listed />}
    </div>
  );
};
