import cn from 'classnames';
import vector from '../../../assets/new-icons/317c1dc22347289477a10d2a5ae32331170ecefd.svg';
import vectorStroke from '../../../assets/new-icons/203bf945b003f58d563eac5940b62051b3140517.svg';

export interface IconCheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  className?: string;
  disabled?: boolean;
}

export const IconCheckbox = ({ checked, onChange, className, disabled }: IconCheckboxProps) => {
  return (
    <button
      type="button"
      aria-pressed={checked}
      disabled={disabled}
      onClick={() => !disabled && onChange(!checked)}
      className={cn(
        'relative w-6 h-6 rounded-[6px] flex items-center justify-center',
        checked ? 'bg-[#72c0ec]' : 'bg-transparent',
        disabled ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer',
        className,
      )}
    >
      <img
        src={checked ? vector : vectorStroke}
        alt={checked ? 'checked' : 'unchecked'}
        className={cn('absolute', checked ? 'inset-[12.5%]' : 'inset-[12.5%]')}
      />
    </button>
  );
};

export default IconCheckbox;


