import { Badge } from '../../../shared/ui/badge';
import cn from 'classnames';

export const Sticker = ({
  src,
  idx,
  badge,
  type,
}: {
  src: string;
  idx: number;
  badge: string;
  type: 'uncommon' | 'gold';
}) => {
  return (
    <div
      key={idx}
      className={cn(
        'relative w-[114px] h-[114px] rounded-[12px] overflow-hidden',
        type === 'gold' && 'bg-[#FF9411]',
        type === 'uncommon' && 'bg-[#B0C3D9]',
      )}
    >
      <img
        src={src}
        alt={`sticker-${idx}`}
        className="absolute inset-0 w-full h-full object-cover"
      />
      {idx === 2 && (
        <div className="absolute top-1 right-1">
          <Badge type="gray" className="!px-2 !py-0.5 !rounded-[12px]">
            {badge}
          </Badge>
        </div>
      )}
    </div>
  );
};
