import banner from '../assets/collection/banner.png';
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

export const Collection = () => {
  // Использую те же стикеры, что и на Market (иконки из набора), если понадобятся — добавлю отдельные из Figma
  const imagesA: string[] = [];
  const imagesB: string[] = [];

  return (
    <div className="flex flex-col gap-4">
      {/* Banner */}
      <div className="w-full h-[240px] rounded-t-[12px] overflow-hidden">
        <img src={banner} alt="banner" className="w-full h-full object-cover" />
      </div>

      {/* Collection Info */}
      <section className="px-4 flex flex-col gap-4">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-4 w-[358px]">
            <h1 className="text-white text-[22px] tracking-[0.03em]">Armor Collection</h1>
            {/* Иконка reply из набора общих иконок, при необходимости — подключу */}
          </div>
        </div>
        <div className="text-[#AFB0B0] text-[14px]">by Top Tier Authentics</div>
        <p className="text-[#AFB0B0] text-[16px]">
          Official collections that put a bold, retro spin on the design. Inspired by classic 16-bit
          gaming, these collections reimagine the skin with nostalgic pixel art flair, blending
          old-school vibes with modern energy to resonate with gamers across generations.
        </p>
      </section>

      {/* Blocks */}
      <div className="flex flex-col gap-8 px-4">
        {/* Free Starter Pack */}
        <div className="flex flex-col gap-4 items-end">
          <div className="flex items-center justify-between w-full gap-4">
            <div className="flex flex-col justify-center gap-1">
              <h2 className="text-white text-[22px] tracking-[0.03em]">Free Starter Pack</h2>
              <span className="text-[#B0C3D9] text-[12px] font-extrabold">UNCOMMON</span>
              <div className="flex items-center gap-3 h-4">
                <span className="text-[#AFB0B0] text-[12px]">Aromor collection</span>
              </div>
            </div>
            <SmallPillButton label="GET FREE" color="yellow" />
          </div>
          <StickerRow images={imagesA} />
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
          <StickerRow images={imagesB} />
        </div>
      </div>
    </div>
  );
};

export default Collection;
