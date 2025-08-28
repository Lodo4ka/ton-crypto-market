import { useState } from 'react';
import banner from '../assets/market/banner.png';
import sticker1 from '../assets/market/sticker1.png';
import sticker2 from '../assets/market/sticker2.png';
import sticker3 from '../assets/market/sticker3.png';
import sticker4 from '../assets/market/sticker4.png';
import sticker5 from '../assets/market/sticker5.png';
import sticker6 from '../assets/market/sticker6.png';
import { TextField } from '../shared/ui/text-field';
import { Badge } from '../shared/ui/badge';
import { BuyBadge } from '../shared/ui/buy-badge';
import { SmallPillButton } from '../shared/ui/small-pill-button';

const StickerRow = ({ images }: { images: string[] }) => {
  const items = images.slice(0, 3);
  return (
    <div className="flex items-center justify-center gap-2 w-full">
      {items.map((src, idx) => (
        <div key={idx} className="relative w-[114px] h-[114px] rounded-[12px] overflow-hidden">
          <img
            src={src}
            alt={`sticker-${idx}`}
            className="absolute inset-0 w-full h-full object-cover"
          />
          {idx === 2 && (
            <div className="absolute top-1 right-1">
              <Badge type="gray" className="!px-2 !py-0.5 !rounded-[12px]">
                2 more
              </Badge>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export const Market = () => {
  const [search, setSearch] = useState('');

  return (
    <div className="flex flex-col gap-4">
      <TextField type="search" value={search} onChange={setSearch} placeholder="Search" />

      <div className="w-full h-[202px] rounded-[12px] overflow-hidden">
        <img src={banner} alt="banner" className="w-full h-full object-cover" />
      </div>

      <div className="flex flex-col gap-8">
        {/* Free Starter Pack */}
        <div className="flex flex-col gap-4 items-end">
          <div className="flex items-center justify-between w-full gap-4">
            <div className="flex flex-col justify-center gap-1">
              <h2 className="text-white text-[22px] tracking-[0.03em] font-[400]">
                Free Starter Pack
              </h2>
              <span className="text-[#B0C3D9] text-[12px] font-extrabold">UNCOMMON</span>
              <div className="flex items-center gap-3 h-4">
                <span className="text-[#AFB0B0] text-[12px]">Aromor collection</span>
              </div>
            </div>
            <SmallPillButton label="GET FREE" color="yellow" />
          </div>
          <StickerRow images={[sticker1, sticker2, sticker3]} />
        </div>

        {/* The Gold Pack */}
        <div className="flex flex-col gap-4 items-end">
          <div className="flex items-center justify-between w-full gap-4">
            <div className="flex flex-col gap-1">
              <h3 className="text-white text-[20px]">The Gold Pack</h3>
              <span className="text-[#FF9411] text-[12px] font-extrabold">Legendary</span>
              <div className="flex items-center justify-between w-[358px]">
                <span className="text-[#AFB0B0] text-[12px]">Aromor collection</span>
                <span className="text-white text-[14px]">Left: 312  783 / 400  000</span>
              </div>
            </div>
            <BuyBadge color="yellow" amount={14999} />
          </div>
          <StickerRow images={[sticker4, sticker5, sticker6]} />
        </div>
      </div>
    </div>
  );
};
