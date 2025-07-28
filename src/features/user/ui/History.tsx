import { useState } from 'react';
import { Search } from '../../../shared/ui/search/Search';
import { HistoryTable } from './HistoryTable';

interface HistoryProps {
  className?: string;
}

export const History = ({ className = '' }: HistoryProps) => {
  const [search, setSearch] = useState('');

  const onClickHandleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onFilter = () => {
    console.log('filter');
  };

  return (
    <div className={className}>
      <Search
        filtered
        value={search}
        onChange={onClickHandleSearch}
        className="mb-[24px]"
        onFilter={onFilter}
      />
      <HistoryTable />
    </div>
  );
};
