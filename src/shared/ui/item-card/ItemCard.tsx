import type { FC } from 'react';

export type ItemCardProps = {
  title: string;
  rarity: 'Legendary' | 'Epic' | 'Rare' | string;
  img: string;
  className?: string;
};

export const ItemCard: FC<ItemCardProps> = ({ title, rarity, img, className }) => {
  const rarityColor =
    rarity.toLowerCase() === 'legendary'
      ? '#FF9411'
      : rarity.toLowerCase() === 'epic'
        ? '#8847FF'
        : '#4B69FF';

  return (
    <div
      className={`flex flex-col items-center gap-2 p-1 w-[114px] rounded-[12px] border border-[rgba(255,255,255,0.05)] bg-[rgba(255,255,255,0.05)] ${
        className ?? ''
      }`.trim()}
    >
      <img src={img} alt={title} width={106} height={106} className="rounded-[8px]" />
      <div className="w-full px-2 flex flex-col gap-0.5">
        <div className="w-full text-white text-[14px] font-bold leading-[1.2] truncate">
          {title}
        </div>
        <div
          className="text-[12px] font-exo2-bold leading-[1.2]"
          style={{ color: rarityColor, textTransform: 'uppercase' }}
        >
          {rarity}
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
