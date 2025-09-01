import cn from 'classnames';
import xmarkCircle from '../../../assets/new-icons/37c661ea2bd8220686b7825eeb06d17af594bdfc.svg';
import search from '../../../assets/icons/search.svg';

export type TextFieldType = 'text' | 'search';

export interface TextFieldProps {
  type?: TextFieldType;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  onClear?: () => void;
}

export const TextField = ({
  type = 'text',
  value,
  onChange,
  placeholder,
  className,
  disabled,
  onClear,
}: TextFieldProps) => {
  const showSearch = type === 'search';
  const showClear = Boolean(value) && !disabled;

  return (
    <div
      className={cn(
        'flex items-center bg-white/10 rounded-[12px] h-[46px] px-4 gap-3',
        disabled && 'opacity-60 pointer-events-none',
        className,
      )}
    >
      {showSearch && <img src={value ? search : search} alt="search" className="w-5 h-[22px]" />}
      <input
        type="text"
        className={cn(
          'bg-transparent outline-none text-white placeholder-[#5e5e5e] text-[16px] leading-[20px] flex-1',
        )}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
      />
      {showClear && (
        <button
          type="button"
          onClick={onClear ?? (() => onChange(''))}
          className="w-[23px] h-[23px] cursor-pointer flex items-center justify-center"
          aria-label="Clear"
        >
          <img src={xmarkCircle} alt="clear" className="w-5 h-[22px]" />
        </button>
      )}
    </div>
  );
};

export default TextField;
