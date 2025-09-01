import sortIcon from '../../../assets/icons/sort.svg';
import filterIcon from '../../../assets/icons/mingcute_settings-6-line-yellow.svg';
import { TextField } from '../text-field/TextField';

interface SearchProps {
  className?: string;
  value: string;
  onChange: (value: string) => void;
  onSort?: () => void;
  onFilter?: () => void;
  sorted?: boolean;
  filtered?: boolean;
}

export const Search = ({
  className = '',
  value,
  onChange,
  onSort,
  onFilter,
  sorted,
  filtered,
}: SearchProps) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <TextField
        type="search"
        value={value}
        onChange={onChange}
        placeholder="Search"
        className="flex-1 !h-9"
      />
      {sorted && (
        <button
          type="button"
          className="w-9 h-9 flex items-center justify-center rounded-[12px] bg-white/10 cursor-pointer"
          aria-label="Sort"
          onClick={onSort}
        >
          <img src={sortIcon} alt="sort" className="w-5 h-5" />
        </button>
      )}
      {filtered && (
        <button
          type="button"
          className="w-9 h-9 flex items-center justify-center rounded-[12px] bg-[#F3F084] cursor-pointer"
          aria-label="Settings"
          onClick={onFilter}
        >
          <img src={filterIcon} alt="settings" className="w-5 h-5" />
        </button>
      )}
    </div>
  );
};
