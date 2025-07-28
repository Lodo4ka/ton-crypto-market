import Overlay from '../../../shared/ui/overlay/Overlay';
import { Search } from '../../../shared/ui/search/Search';
import { FilterModal } from './FilterModal';
import { useState } from 'react';

interface SearchLootBoxProps {
  searchValue: string;
  handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSort: () => void;
  onFilter: () => void;
}

export const SearchLootBox = ({
  searchValue,
  handleSearchChange,
  onSort,
  onFilter,
}: SearchLootBoxProps) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const onOpenFilter = () => {
    setIsFilterOpen(true);
  };

  const onCloseFilter = () => {
    setIsFilterOpen(false);
  };

  const handleFilterApply = (filters: FilterState) => {
    onFilter(filters);
  };

  const handleFilterReset = () => {};

  return (
    <>
      <Search
        sorted
        filtered
        value={searchValue}
        onChange={handleSearchChange}
        onFilter={onOpenFilter}
        onSort={onSort}
      />
      <Overlay open={isFilterOpen} onClose={onCloseFilter}>
        <FilterModal
          onApply={handleFilterApply}
          onReset={handleFilterReset}
          onClose={onCloseFilter}
        />
      </Overlay>
    </>
  );
};
