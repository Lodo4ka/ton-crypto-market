import cn from 'classnames';

export interface OneTimeCodeProps {
  length?: 4 | 6;
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

export const OneTimeCode = ({ length = 6, value, onChange, className }: OneTimeCodeProps) => {
  const digits = Array.from({ length }, (_, i) => value[i] ?? '');

  const handleChange = (idx: number, char: string) => {
    const next = value.split('');
    next[idx] = char.replace(/\D/g, '').slice(0, 1);
    const joined = next.join('').slice(0, length);
    onChange(joined);
  };

  return (
    <div className={cn('flex gap-2', className)}>
      {digits.map((d, i) => (
        <input
          key={i}
          inputMode="numeric"
          pattern="[0-9]*"
          value={d}
          onChange={(e) => handleChange(i, e.target.value)}
          className={cn(
            'w-[38px] h-[46px] rounded-[12px] text-black text-[28px] leading-[34px] text-center',
            'bg-white border border-[#c8c7cb] focus:outline-none focus:border-2 focus:border-[#007aff] focus:rounded-[14px]',
          )}
          maxLength={1}
        />
      ))}
    </div>
  );
};

export default OneTimeCode;
