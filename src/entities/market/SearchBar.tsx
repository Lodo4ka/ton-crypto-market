import { TextField } from '../../shared/ui/text-field';
import sortIcon from '../../assets/new-icons/sort.svg';
import settingsIcon from '../../assets/new-icons/settings.svg';
import cn from 'classnames';

export const SearchBar = ({
  search,
  setSearch,
  onSort,
  onFilter,
  className,
}: {
  search: string;
  setSearch: (value: string) => void;
  onSort?: () => void;
  onFilter?: () => void;
  className?: string;
}) => {
  return (
    <div className={cn('flex items-center gap-1', className)}>
      <TextField
        type="search"
        value={search}
        onChange={setSearch}
        placeholder="Search"
        className="flex-1 !h-9"
      />
      {onSort && (
        <button
          type="button"
          className="w-9 h-9 flex items-center justify-center rounded-[12px] bg-white/10 cursor-pointer"
          aria-label="Sort"
          onClick={onSort}
        >
          <img src={sortIcon} alt="sort" className="w-5 h-5" />
        </button>
      )}
      {onFilter && (
        <button
          type="button"
          className="w-9 h-9 flex items-center justify-center rounded-[12px] bg-white/10 cursor-pointer"
          aria-label="Settings"
          onClick={onFilter}
        >
          <img src={settingsIcon} alt="settings" className="w-5 h-5" />
        </button>
      )}
    </div>
  );
};
