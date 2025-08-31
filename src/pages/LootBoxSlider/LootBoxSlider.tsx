import type { FC } from 'react';
import { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y } from 'swiper/modules';

import lootbox9 from '../../assets/lootbox/9.png';
import lootbox10 from '../../assets/lootbox/10.png';
import lootbox11 from '../../assets/lootbox/11.png';
import lootbox12 from '../../assets/lootbox/12.png';
import { useAppDispatch } from '../../app/hooks.ts';
import { setPlayButtonLabel } from '../../shared/ui/play-button/playButtonSlice.ts';

type LootBoxSliderProps = {
  className?: string;
};

type Slide = {
  title: string;
  subtitle: string;
  img: string;
  rarity: 'LEGENDARY' | 'EPIC' | 'RARE';
};

const SLIDES: Slide[] = [
  {
    title: 'Godlike Box',
    subtitle: 'Top Speed: Racing Legends',
    img: lootbox9,
    rarity: 'LEGENDARY',
  },
  {
    title: 'Champion Box',
    subtitle: 'Top Speed: Racing Legends',
    img: lootbox10,
    rarity: 'EPIC',
  },
  {
    title: 'Aqua Box',
    subtitle: 'Top Speed: Racing Legends',
    img: lootbox11,
    rarity: 'RARE',
  },
  {
    title: 'Glitch Box',
    subtitle: 'Top Speed: Racing Legends',
    img: lootbox12,
    rarity: 'RARE',
  },
];

export const LootBoxSlider: FC<LootBoxSliderProps> = ({ className }) => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const [activeIndex, setActiveIndex] = useState(0);

  const initialSlide = useMemo(() => {
    const idx = Number(id);
    if (Number.isFinite(idx) && idx >= 0 && idx < SLIDES.length) return idx;
    return 0;
  }, [id]);

  useEffect(() => {
    dispatch(setPlayButtonLabel('Get loot box'));
  }, [dispatch]);

  useEffect(() => {
    // Синхронизировать активный индекс со стартовым слайдом
    setActiveIndex(initialSlide);
  }, [initialSlide]);

  return (
    <div className={`w-full text-white ${className ?? ''}`.trim()}>
      <div className="mx-auto w-full">
        {/* Hero (current slide preview) */}
        <div className="mt-2 flex flex-col items-center">
          <div className="w-[258px] h-[258px] flex items-center justify-center">
            <img
              src={SLIDES[activeIndex].img}
              alt={SLIDES[activeIndex].title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-center mt-2">
            <div className="text-[22px] leading-[1.1] font-['Russo_One']">
              {SLIDES[activeIndex].title}
            </div>
            <div
              className="text-[14px] font-exo2-bold mt-1"
              style={{
                color:
                  SLIDES[activeIndex].rarity === 'LEGENDARY'
                    ? '#FFA800'
                    : SLIDES[activeIndex].rarity === 'EPIC'
                      ? '#9B5CFF'
                      : '#5AA7FF',
              }}
            >
              {SLIDES[activeIndex].rarity}
            </div>
          </div>
        </div>

        {/* Slider */}
        <div className="mt-6">
          <Swiper
            modules={[Pagination, A11y]}
            slidesPerView={2.2}
            centeredSlides
            centeredSlidesBounds
            spaceBetween={12}
            pagination={false}
            initialSlide={initialSlide}
            onRealIndexChange={(s) => setActiveIndex(s.realIndex)}
            slidesOffsetBefore={16}
            slidesOffsetAfter={16}
            loop
            className="w-full"
          >
            {SLIDES.map((slide, index) => {
              const isActive = index === activeIndex;
              const prevIndex = (activeIndex - 1 + SLIDES.length) % SLIDES.length;
              const nextIndex = (activeIndex + 1) % SLIDES.length;
              const isNeighbor = index === prevIndex || index === nextIndex;
              const gradient = isActive
                ? 'linear-gradient(180deg, rgba(255,230,94,0.08) 0%, rgba(223,200,44,0.24) 100%)'
                : index % 2 === 0
                  ? 'linear-gradient(180deg, rgba(154,74,255,0.08) 0%, rgba(123,63,211,0.2) 100%)'
                  : 'linear-gradient(180deg, rgba(139,152,166,0.08) 0%, rgba(90,95,102,0.2) 100%)';

              const rarityColor =
                slide.rarity === 'LEGENDARY'
                  ? '#FFA800'
                  : slide.rarity === 'EPIC'
                    ? '#9B5CFF'
                    : '#5AA7FF';

              return (
                <SwiperSlide
                  key={slide.title}
                  style={{ paddingBottom: 12, opacity: isActive ? 1 : isNeighbor ? 0.5 : 0.3 }}
                  className="flex items-end transition-opacity"
                >
                  <div className="flex flex-col items-center w-full">
                    <div
                      className="rounded-[16px] w-full flex flex-col items-center justify-between border border-white/5 p-4 transition-transform overflow-hidden"
                      style={{
                        background: gradient,
                        transform: 'scale(1)',
                        transformOrigin: 'bottom center',
                        aspectRatio: '3 / 4',
                      }}
                    >
                      <div className="w-full flex flex-col gap-1">
                        <div className="text-[16px] font-['Russo_One'] leading-[1.2] whitespace-nowrap overflow-hidden text-ellipsis text-center">
                          {slide.title}
                        </div>
                        <div
                          className="text-[10px] text-center font-exo2-bold"
                          style={{ color: rarityColor }}
                        >
                          {slide.rarity}
                        </div>
                      </div>
                      <div className="mt-auto w-full flex items-center justify-center">
                        <img
                          src={slide.img}
                          alt={slide.title}
                          className="w-[128px] h-[128px] object-contain"
                        />
                      </div>
                    </div>
                    {isActive && (
                      <div className="-mt-2 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="28"
                          height="16"
                          viewBox="0 0 28 16"
                          fill="none"
                        >
                          <path
                            d="M15.3707 1.2901L27.3276 12.5436C28.6465 13.7849 27.768 16 25.9568 16H2.04316C0.231983 16 -0.646467 13.7849 0.672428 12.5436L12.6293 1.2901C13.3994 0.565298 14.6006 0.565299 15.3707 1.2901Z"
                            fill="#FFA100"
                          />
                        </svg>
                      </div>
                    )}
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default LootBoxSlider;
