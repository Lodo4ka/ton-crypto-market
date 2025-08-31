import type { FC } from 'react';
import { SwiperSlide } from 'swiper/react';
import { SectionHeader } from '../../shared/ui/section-header/SectionHeader';
import { ItemCard } from '../../shared/ui/item-card/ItemCard';
import { HorizontalScroller } from '../../shared/ui/horizontal-scroller/HorizontalScroller';
import { HeroSlider } from '../../shared/ui/hero-slider/HeroSlider';
import { GameHeader } from '../../shared/ui/game-header/GameHeader';
import { BottomCTA } from '../../shared/ui/bottom-cta/BottomCTA';
import { GamePageTitle } from './GamePageTitle';
import { PlayButton } from '../../shared/ui/play-button/PlayButton';

type GamePageProps = {
  className?: string;
};

const heroImages: string[] = [
  '/figma/867479926bbbaadc6e682a53eb63070a09825ade.png',
  '/figma/82faf6872f57e3bb731c687fdae04208ba48100a.png',
  '/figma/f4718c2134b433e60f97aa5e30633facade08c1f.png',
  '/figma/7b89c690c07199a746b384ae36b65c3412e1002f.png',
  '/figma/ede1def55d46cad8d65307881a6520f21129b1df.png',
];

const skinsData = [
  {
    title: 'Yellow Wind',
    rarity: 'Legendary',
    img: '/figma/lootbox_yellow_wind.png',
  },
  {
    title: 'Unstoppable Orange',
    rarity: 'Legendary',
    img: '/figma/lootbox_unstoppable_orange.png',
  },
  {
    title: 'Extreme Power',
    rarity: 'Legendary',
    img: '/figma/lootbox_yellow_wind_2.png',
  },
];

const lootboxesData = [
  {
    title: 'Godlike Box',
    rarity: 'Legendary',
    img: '/figma/82faf6872f57e3bb731c687fdae04208ba48100a.png',
  },
  {
    title: 'Champion Box',
    rarity: 'Epic',
    img: '/figma/f4718c2134b433e60f97aa5e30633facade08c1f.png',
  },
  {
    title: 'Aqua Box',
    rarity: 'Rare',
    img: '/figma/7b89c690c07199a746b384ae36b65c3412e1002f.png',
  },
];

const stickersData = [
  {
    title: 'Artistic Power',
    rarity: 'Legendary',
    img: '/figma/82c52204354f873eee92744dcb7a199f501656db.png',
  },
  {
    title: 'Pixels Universe',
    rarity: 'Epic',
    img: '/figma/8d540cc806de191e78b38695d4964dd9209db826.png',
  },
  {
    title: 'Sunset Power',
    rarity: 'Epic',
    img: '/figma/b3626f1346fc6dc7c6f5970d72064f4bd66f28e1.png',
  },
];

export const GamePage: FC<GamePageProps> = ({ className }) => {
  return (
    <div className={className}>
      {/* Hero slider */}
      <HeroSlider images={heroImages} className="w-full" height={280} offsetTop={30} />

      {/* Dots already handled by Swiper pagination */}

      {/* Game header row */}
      <GameHeader
        avatarSrc="/figma/48f1fa28dbb75a2bfe7369123a4494f7cf5e62aa.png"
        title="Top Speed: Racing Legends"
        subtitle="300k total players"
      />

      <GamePageTitle
        title="Become a street racing legend!"
        description="Beat criminal overlords and become the biggest fish in the city! Dominate your criminally insane rivals in extreme head-to-head drag races."
      />

      {/* Skins section */}
      <div className="mt-6 flex flex-col gap-3">
        <SectionHeader title="Skins" count={28} />
        <div>
          <HorizontalScroller>
            {skinsData.map((item) => (
              <SwiperSlide key={item.title} style={{ width: 114 }}>
                <ItemCard title={item.title} rarity={item.rarity} img={item.img} />
              </SwiperSlide>
            ))}
          </HorizontalScroller>
        </div>
      </div>

      {/* Lootboxes section */}
      <div className="mt-6 flex flex-col gap-3">
        <SectionHeader title="Lootboxes" count={6} />
        <div>
          <HorizontalScroller>
            {lootboxesData.map((item) => (
              <SwiperSlide key={item.title} style={{ width: 114 }}>
                <ItemCard title={item.title} rarity={item.rarity} img={item.img} />
              </SwiperSlide>
            ))}
          </HorizontalScroller>
        </div>
      </div>

      {/* Sticker Packs section */}
      <div className="mt-6 mb-20 flex flex-col gap-3">
        <SectionHeader title="Sticker Packs" count={4} />
        <div>
          <HorizontalScroller>
            {stickersData.map((item) => (
              <SwiperSlide key={item.title} style={{ width: 114 }}>
                <ItemCard title={item.title} rarity={item.rarity} img={item.img} />
              </SwiperSlide>
            ))}
          </HorizontalScroller>
        </div>
      </div>

      {/* Bottom CTA */}
      {/* <BottomCTA label="Play" /> */}
      <PlayButton className="!py-3" text="Play" onClick={() => {}} />
    </div>
  );
};

export default GamePage;
