import { useState } from 'react';
import banner from '../assets/market/banner.png';
import sticker1 from '../assets/market/sticker1.png';
import sticker2 from '../assets/market/sticker2.png';
import sticker3 from '../assets/market/sticker3.png';
import sticker4 from '../assets/market/sticker4.png';
import sticker5 from '../assets/market/sticker5.png';
import sticker6 from '../assets/market/sticker6.png';
import { TextField } from '../shared/ui/text-field';
import { BuyBadge } from '../shared/ui/buy-badge';
import { SmallPillFillButton } from '../shared/ui/small-pill-fill-button/SmallPillButton.tsx';
import { TimerBadge } from '../shared/ui/timer-badge';
import { Banner } from '../entities/lootbox/ui/Banner.tsx';
import { Sticker } from '../entities/lootbox/ui/Sticker.tsx';

const StickerRow = ({ images, type }: { images: string[]; type: 'uncommon' | 'gold' }) => {
  const items = images.slice(0, 3);
  return (
    <div className="flex items-center justify-center gap-2 w-full">
      {items.map((src, idx) => (
        <Sticker key={idx} src={src} idx={idx} badge={idx === 2 ? '2 more' : ''} type={type} />
      ))}
    </div>
  );
};

export const Market = () => {
  const [search, setSearch] = useState('');

  return (
    <div className="flex flex-col gap-4">
      <TextField type="search" value={search} onChange={setSearch} placeholder="Search" />

      <Banner image={banner} />
      <div className="flex flex-col gap-8">
        {/* Free Starter Pack */}
        <div className="flex flex-col gap-4 items-end">
          <div className="flex items-center justify-between w-full gap-4">
            <div className="flex flex-col justify-center gap-1">
              <h2 className="text-white text-[22px] tracking-[0.03em] font-[400] font-russo">
                Free Starter Pack
              </h2>
              <span className="text-[#B0C3D9] text-[12px] font-extrabold font-exo2">UNCOMMON</span>
              <div className="flex items-center gap-3 h-4">
                <span className="text-[#AFB0B0] text-[12px]">Aromor collection</span>
              </div>
            </div>
            <SmallPillFillButton label="GET FREE" color="yellow" />
          </div>
          <StickerRow images={[sticker1, sticker2, sticker3]} type="uncommon" />
        </div>

        {/* The Gold Pack */}
        <div className="flex flex-col gap-4 items-end">
          <div className="flex items-center justify-between w-full gap-4">
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <h3 className="text-white text-[20px] font-russo">The Gold Pack</h3>
                <SmallPillFillButton
                  label={
                    <span className="flex items-center gap-2">
                      GET FREE
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <g clip-path="url(#clip0_40000014_6242)">
                          <path
                            d="M12.5943 4.36588L14.5148 8.36817C14.5967 8.50976 14.7242 8.67967 14.8516 8.77406C15.5433 9.29323 18.2285 9.19883 19.2479 9.50089C20.2673 9.80295 20.0034 10.2655 19.8577 10.8602L16.5719 14.3433C16.4627 15.7025 16.9542 17.194 16.9906 18.5438C17.027 19.8936 16.5628 20.224 15.5342 19.8653C14.351 19.45 13.1677 18.3267 11.9389 17.9491L8.16156 19.8747C7.57903 20.1202 6.92368 19.4028 6.92368 18.8459C6.92368 18.2889 7.20584 16.5804 7.41519 16.0707C8.06144 14.5226 10.8922 13.7486 12.2302 12.8519C13.5682 11.9551 12.485 12.446 12.1301 12.4648C10.4007 12.5498 7.52442 13.6825 6.03168 12.7291C5.6949 12.512 4.28408 11.3227 4.12934 11.0206C3.78346 10.341 4.16575 9.66136 4.86661 9.48201C6.15911 9.16108 7.71556 9.29323 9.00805 8.86846C9.14459 8.75518 9.2265 8.58528 9.31752 8.43425C9.92736 7.38648 10.5736 5.31926 11.2472 4.4886C11.9207 3.65793 12.1392 4.07327 12.5852 4.37532L12.5943 4.36588Z"
                            fill="#F3F084"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_40000014_6242">
                            <rect width="24" height="24" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      14 999
                    </span>
                  }
                  color="yellow-blur"
                  className="ml-auto"
                />
              </div>
              <span className="text-[#FF9411] text-[12px] font-extrabold font-exo2">LEGENDARY</span>
              <div className="flex items-center justify-between w-[358px]">
                <span className="text-[#AFB0B0] text-[12px]">Aromor collection</span>
                <span className="text-white text-[14px]">
                  <span className="text-[]">Left</span>: 312  783 / 400  000
                </span>
              </div>
            </div>
            <BuyBadge color="yellow" amount={14999} />
          </div>
          <StickerRow images={[sticker4, sticker5, sticker6]} type="gold" />
        </div>

        {/* Coming Soon */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between w-full gap-4">
            <div className="flex flex-col gap-1">
              <h3 className="text-white text-[20px] font-russo">Coming Soon</h3>
              <span className="text-[#AFB0B0] text-[12px] font-extrabold opacity-60 font-russo">
                DON’T MISS IT
              </span>
            </div>
            <SmallPillFillButton
              label={
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="14"
                    viewBox="0 0 16 14"
                    fill="none"
                  >
                    <path
                      d="M15.6987 2.92195L8.72445 13.5801C8.63914 13.7092 8.52112 13.8154 8.38142 13.8888C8.24173 13.9623 8.08492 14.0005 7.92565 14C7.76637 13.9995 7.60983 13.9602 7.47065 13.8859C7.33147 13.8116 7.2142 13.7046 7.12979 13.575L0.291569 2.91684C0.0996393 2.61849 -0.00136222 2.2745 1.38758e-05 1.92387C0.00820349 1.4059 0.230434 0.912258 0.61783 0.551514C1.00523 0.190771 1.52606 -0.00753197 2.06579 0.000218961H13.9431C15.0782 -0.000634101 16 0.857546 16 1.91875C16 2.27107 15.8969 2.61912 15.6987 2.92195ZM1.97157 2.56367L7.05867 10.0928V1.80615H2.50312C1.9769 1.80615 1.74135 2.14055 1.97157 2.56538M8.94045 10.0945L14.0293 2.56367C14.2649 2.1397 14.024 1.80444 13.4969 1.80444H8.94223L8.94045 10.0945Z"
                      fill="#72C0EC"
                    />
                  </svg>
                  <span>3d 12:18:45</span>
                </div>
              }
              color="blue-blur"
            />
            {/* <TimerBadge text="3d 12:18:45" /> */}
          </div>
          <div className="flex items-center gap-2 w-full">
            {[sticker4, sticker5, sticker6].map((src, idx) => (
              <div
                key={`cs-${idx}`}
                className="relative w-[114px] h-[114px] rounded-[12px] overflow-hidden bg-[#484544]"
              >
                <img
                  src={src}
                  alt={`cs-${idx}`}
                  className="absolute inset-0 w-full h-full object-cover blur-[22px] opacity-70"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
