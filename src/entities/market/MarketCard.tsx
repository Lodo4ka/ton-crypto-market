import { RarityBadge } from '../../shared/ui/rarity-badge/RarityBadge.tsx';
import { SmallPillFillButton } from '../../shared/ui/small-pill-fill-button/SmallPillButton.tsx';
import type { MarketItem } from './market.props.ts';
import starBorderGold from '../../assets/icons/start-border-gold.svg';

export const MarketCard = ({ item }: { item: MarketItem }) => {
  return (
    <div
      key={item.id}
      className="bg-white/5 border border-white/5 rounded-[12px] p-1 flex flex-col gap-2"
    >
      <div className="w-full aspect-square rounded-[8px] overflow-hidden">
        <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
      </div>
      <div className="px-2 flex flex-col gap-1">
        <div className="flex items-center justify-between">
          <div className="text-white text-[14px] font-exo2-bold truncate max-w-[120px]">
            {item.title}
          </div>
          <img src={item.imageSmall} alt={item.title} className="w-5 h-5 rounded-full" />
        </div>
        <div className="flex items-center justify-between text-[12px]">
          <RarityBadge rarity={item.rarity} className="self-start" />
          <span className="text-[#AFB0B0]">{item.code}</span>
        </div>
      </div>
      <div className="px-1 pb-1">
        <SmallPillFillButton
          label={
            <div className="flex items-center justify-center gap-1 whitespace-nowrap">
              <span>GET FOR</span>
              <img src={starBorderGold} alt="star-border-gold" className="w-5 h-5 rounded-full" />
              <span>14 999</span>
            </div>
          }
          color="yellow-blur"
          className="w-full"
        />
      </div>
    </div>
  );
};
