import searchIcon from '../../../assets/icons/search.svg';
import filterIcon from '../../../assets/icons/mingcute_settings-6-line.svg';

interface SearchProps {
  className?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Search = ({ className = '', value, onChange }: SearchProps) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="flex flex-1 items-center bg-[#191919] rounded-2xl px-5 h-14">
        <img src={searchIcon} alt="search" className="w-6 h-6 mr-3" />
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent outline-none text-lg text-white placeholder-[#6B7280] flex-1"
          value={value}
          onChange={onChange}
        />
      </div>
      <button
        type="button"
        className="bg-[#191919] rounded-2xl w-14 h-14 flex items-center justify-center cursor-pointer"
      >
        <img src={filterIcon} alt="filter" className="w-7 h-7 text-[#2563EB]" />
      </button>
    </div>
  );
};
