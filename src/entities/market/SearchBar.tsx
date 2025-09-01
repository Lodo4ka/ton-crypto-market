import { TextField } from '../../shared/ui/text-field';
import sortIcon from '../../assets/new-icons/sort.svg';
import settingsIcon from '../../assets/new-icons/settings.svg';

export const SearchBar = ({
  search,
  setSearch,
}: {
  search: string;
  setSearch: (value: string) => void;
}) => {
  return (
    <>
      <TextField
        type="search"
        value={search}
        onChange={setSearch}
        placeholder="Search"
        className="flex-1 !h-9"
      />
      <button
        type="button"
        className="w-9 h-9 flex items-center justify-center rounded-[12px] bg-white/10 cursor-pointer"
        aria-label="Sort"
      >
        <img src={sortIcon} alt="sort" className="w-5 h-5" />
      </button>
      <button
        type="button"
        className="w-9 h-9 flex items-center justify-center rounded-[12px] bg-white/10 cursor-pointer"
        aria-label="Settings"
      >
        <img src={settingsIcon} alt="settings" className="w-5 h-5" />
      </button>
    </>
  );
};
