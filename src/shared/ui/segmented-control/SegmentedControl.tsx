import cn from 'classnames';

export interface SegmentedControlProps {
  tabs: string[]; // 2-3 таба
  activeIndex: number;
  onChange: (index: number) => void;
  className?: string;
}

export const SegmentedControl = ({ tabs, activeIndex, onChange, className }: SegmentedControlProps) => {
  return (
    <div className={cn('flex items-start bg-white/5 rounded-[9px] py-0.5 px-[3px] gap-[3px]', className)}>
      {tabs.map((label, idx) => {
        const isActive = idx === activeIndex;
        return (
          <button
            key={label + idx}
            type="button"
            onClick={() => onChange(idx)}
            className={cn(
              'h-7 flex-1 rounded-[7px] px-3 text-[14px] font-semibold transition-colors',
              'shadow-[0px_3px_8px_0px_rgba(0,0,0,0.12),0px_3px_1px_0px_rgba(0,0,0,0.04)]',
              isActive ? 'bg-[#72c0ec] text-black' : 'text-[#afb0b0] bg-transparent',
            )}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
};

export default SegmentedControl;


