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

  return (
    <div className={className}>
      <Search value={search} onChange={onClickHandleSearch} className="mb-[24px]" />
      <HistoryTable />
    </div>
  );
};
