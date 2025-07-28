interface CheckboxProps {
  type: string;
  checked: boolean;
  onChange: (value: string) => void;
}

export const Checkbox = ({ type, checked, onChange }: CheckboxProps) => {
  return (
    <label className="flex items-center cursor-pointer">
      <div className="relative mr-3">
        <input
          type="checkbox"
          checked={checked}
          onChange={() => onChange(type)}
          className="sr-only"
        />
        <div
          className={`w-5 h-5 rounded border-2 cursor-pointer transition-all flex items-center justify-center ${checked ? 'bg-[#2563EB] border-[#2563EB]' : 'bg-transparent border-[#4A5568]'}`}
        >
          {checked && (
            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </div>
      </div>
      <span className="text-white text-lg">{type}</span>
    </label>
  );
};
