import { useState } from 'react';
import { HistoryTable } from './HistoryTable';
import { Search } from '../../../shared/ui/search/Search';

interface HistoryProps {
  className?: string;
}

export const History = ({ className = '' }: HistoryProps) => {
  const [search, setSearch] = useState('');

  const onClickHandleSearch = (value: string) => {
    setSearch(value);
  };

  const onFilter = () => {
    console.log('filter');
  };

  return (
    <div className={className}>
      <Search
        onChange={onClickHandleSearch}
        value={search}
        onFilter={onFilter}
        className="mb-[24px]"
        filtered
      />
      <HistoryTable />
    </div>
  );
};
