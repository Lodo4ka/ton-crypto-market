interface SwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  className?: string;
  disabled?: boolean;
}

export const Switch = ({ checked, onChange, className = '', disabled = false }: SwitchProps) => {
  return (
    <button
      type="button"
      className={`w-[51px] h-[31px] flex items-center px-1 rounded-full transition-colors duration-200 focus:outline-none ${
        checked ? 'bg-[#72C0EC]' : 'bg-gray-600'
      } ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'} ${className}`}
      onClick={() => !disabled && onChange(!checked)}
      aria-pressed={checked}
      disabled={disabled}
    >
      <div
        className={`w-[27px] h-[27px] rounded-full bg-white shadow-md transition-transform duration-200 ${
          checked ? 'translate-x-5' : ''
        }`}
      />
    </button>
  );
};
