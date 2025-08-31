import { useAppDispatch } from '../../app/hooks';
import { useEffect, useState } from 'react';
import { setPlayButtonLabel } from '../../shared/ui/play-button/playButtonSlice.ts';
import starBlack from '../../assets/icons/star-black.svg';
import { RarityBadge } from '../../shared/ui/rarity-badge/RarityBadge.tsx';
// import second from 'src/assets/lootbox/9.png'
import lootbox9 from '../../assets/lootbox/9.png';
import lootbox10 from '../../assets/lootbox/10.png';
import lootbox11 from '../../assets/lootbox/11.png';
import lootbox12 from '../../assets/lootbox/12.png';
import bigLootbox from '../../assets/lootbox/big_lootbox.png';
import shareIcon from '../../assets/icons/share-icon.svg';
import BottomFilterBar from '../../features/lootbox/ui/BottomFilterBar.tsx';

type Rarity = 'LEGENDARY' | 'EPIC' | 'RARE' | 'UNCOMMON' | 'COMMON';

const BOXES: { title: string; rarity: Rarity; left: string; img: string }[] = [
  {
    title: 'Godlike Box',
    rarity: 'LEGENDARY',
    left: '999 / 999',
    img: lootbox9,
  },
  {
    title: 'Champion Box',
    rarity: 'EPIC',
    left: '2 222 / 2 222',
    img: lootbox10,
  },
  {
    title: 'Aqua Box',
    rarity: 'RARE',
    left: '4 444 / 4 444',
    img: lootbox11,
  },
  {
    title: 'Glitch Box',
    rarity: 'UNCOMMON',
    left: '14 999 / 14 999',
    img: lootbox12,
  },
];

export const LootBoxPage = () => {
  const dispatch = useAppDispatch();
  const [count, setCount] = useState(1);
  const PRICE = 14999;

  useEffect(() => {
    dispatch(
      setPlayButtonLabel(
        <div className="flex items-center justify-center gap-2">
          <span>Get for</span>
          <img src={starBlack} alt="star" className="w-6 h-6" />
          <span>{(count * PRICE).toLocaleString('ru-RU')}</span>
        </div>,
      ),
    );
  }, [dispatch, count, PRICE]);

  return (
    <div className="w-full text-white">
      <div className="mx-auto w-full pb-28">
        {/* Title and subtitle */}
        <div className="mt-6">
          <div className="text-[22px] tracking-[0.66px] font-['Russo_One'] leading-[1.2] flex items-center">
            Racer Box
            <img src={shareIcon} alt="share" className="ml-auto" />
          </div>
          <div className="mt-1 text-[14px] text-[#AFB0B0] font-exo2-bold">
            Top Speed: Racing Legends
          </div>
        </div>

        {/* Header image */}
        <div className="mt-6">
          <img src={bigLootbox} alt="Racer Box" className="w-full rounded-[12px] object-contain" />
        </div>

        {/* Intro text */}
        <div className="mt-6 text-[14px]">
          <span className="font-semibold">In seven days,</span>
          <span> you will receive one of the random loot boxes:</span>
        </div>

        {/* Lootboxes list */}
        <div className="mt-4 flex flex-col gap-8">
          {BOXES.map((b) => (
            <div>
              <div className="flex items-start justify-between gap-2 mb-[16px]">
                <div className="flex flex-col gap-1 min-w-0">
                  <div className="text-[20px] font-['Russo_One'] leading-[1.2] truncate">
                    {b.title}
                  </div>
                  <RarityBadge rarity={b.rarity} />
                </div>
                <div className="px-[12px] py-[6px] rounded-full bg-white/25 text-white text-[14px] shrink-0">
                  <span className="text-gray">Left:</span> {b.left}
                </div>
              </div>
              <div key={b.title} className="flex items-start gap-4">
                <div className="bg-white/5 border border-white/5 rounded-[12px] aspect-square w-[120px] flex items-center justify-center">
                  <img src={b.img} alt={b.title} className="w-[76%] object-contain" />
                </div>
                <div className="flex-1 flex flex-col justify-center items-center gap-2 min-w-0 m-auto">
                  <div className="text-[14px] text-white">
                    The list and the probability of what can be obtained from the loot box:
                    <ul className="list-disc pl-5 mt-1">
                      <li>item one</li>
                      <li>item two</li>
                      <li>item three</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <BottomFilterBar price={PRICE} onChange={setCount} />
    </div>
  );
};
