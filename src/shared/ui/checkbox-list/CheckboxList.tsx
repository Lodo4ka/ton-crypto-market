import cn from 'classnames';
import { IconCheckbox } from '../icon-checkbox';

export interface CheckboxItem {
  id: string;
  label: string;
  checked: boolean;
  color?: string; // цвет текста для редкости
}

export interface CheckboxListProps {
  title: string;
  items: CheckboxItem[];
  onToggle: (id: string, checked: boolean) => void;
  className?: string;
}

export const CheckboxList = ({ title, items, onToggle, className }: CheckboxListProps) => {
  return (
    <div className={cn('flex flex-col gap-3', className)}>
      <h3 className="text-white text-[20px] font-extrabold">{title}</h3>
      <div className="flex flex-col gap-5">
        {items.map((item) => (
          <label key={item.id} className="flex items-center gap-4 cursor-pointer">
            <IconCheckbox checked={item.checked} onChange={(v) => onToggle(item.id, v)} />
            <span
              className={cn('text-white text-[16px] leading-5', item.color && 'font-extrabold')}
              style={item.color ? { color: item.color } : undefined}
            >
              {item.label}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default CheckboxList;
