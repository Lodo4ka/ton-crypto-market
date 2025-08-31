import type { FC, PropsWithChildren } from 'react';
import { Swiper } from 'swiper/react';
import { FreeMode } from 'swiper/modules';

export type HorizontalScrollerProps = PropsWithChildren<{
  className?: string;
  space?: number;
}>;

export const HorizontalScroller: FC<HorizontalScrollerProps> = ({ children, className, space = 8 }) => {
  return (
    <Swiper
      modules={[FreeMode]}
      freeMode
      spaceBetween={space}
      slidesPerView="auto"
      className={`scrollbar-hide ${className ?? ''}`.trim()}
    >
      {children}
    </Swiper>
  );
};

export default HorizontalScroller;


