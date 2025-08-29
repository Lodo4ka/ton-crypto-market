import { Badge } from '../../../shared/ui/badge';

export const Sticker = ({ src, idx, badge }: { src: string; idx: number; badge: string }) => {
  return (
    <div key={idx} className="relative w-[114px] h-[114px] rounded-[12px] overflow-hidden">
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
