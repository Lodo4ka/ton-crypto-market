import type { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

export type HeroSliderProps = {
  images: string[];
  className?: string;
  height?: number;
  fullBleed?: boolean;
  offsetTop?: number;
};

export const HeroSlider: FC<HeroSliderProps> = ({
  images,
  className,
  height = 280,
  fullBleed = true,
  offsetTop = 0,
}) => {
  const wrapperStyle: React.CSSProperties = fullBleed
    ? { height, width: '100vw', marginLeft: 'calc(50% - 50vw)', marginTop: -offsetTop }
    : { height };

  return (
    <div className={className} style={wrapperStyle}>
      <Swiper
        modules={[Pagination]}
        className="hero-swiper"
        pagination={{
          clickable: true,
          bulletClass: 'custom-bullet',
          bulletActiveClass: 'custom-bullet-active',
        }}
        style={{ height: '100%' }}
      >
        {images.map((src) => (
          <SwiperSlide key={src}>
            <div
              className="w-full h-full"
              style={{
                backgroundImage: `linear-gradient(180deg, rgba(19, 15, 14, 0) 81%, rgba(19, 15, 14, 1) 100%), url(${src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '100%',
                height: '100%',
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;
