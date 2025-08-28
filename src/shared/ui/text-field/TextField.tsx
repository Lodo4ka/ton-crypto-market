import cn from 'classnames';
import React from 'react';
import magnifyOutline from '../../../assets/new-icons/655a9ba76442956014c9ca6ab86380233c533d38.svg';
import magnifyFilled from '../../../assets/new-icons/c8dd1d239773151ab7c9e89c4549861b9586766d.svg';
import xmarkCircle from '../../../assets/new-icons/37c661ea2bd8220686b7825eeb06d17af594bdfc.svg';

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
      {showSearch && (
        <img
          src={value ? magnifyFilled : magnifyOutline}
          alt="search"
          className="w-5 h-[22px]"
        />
      )}
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


