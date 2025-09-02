import cn from 'classnames';
import LVLStar from '@/assets/icons/LVL_star_1.svg';

export interface LevelStarsProps {
  count?: number; // всего уровней/звезд
  current?: number; // активная звезда (1-based)
  size?: number; // размер стороны контейнера звезды (px)
  gap?: number; // промежуток между звездами (px)
  vertical?: boolean; // вертикальное расположение
  className?: string;
}

export function LevelStars({
  count = 4,
  current = 1,
  size = 60,
  gap = 40,
  vertical = true,
  className,
}: LevelStarsProps) {
  const items = Array.from({ length: count }, (_, idx) => idx + 1);

  return (
    <div
      className={cn('flex', vertical ? 'flex-col' : 'flex-row', className)}
      style={{ gap }}
    >
      {items.map((num) => {
        const isActive = num === current;
        return (
          <div
            key={num}
            className="relative"
            style={{ width: size, height: size }}
            aria-label={`level-${num}`}
          >
            <img
              src={LVLStar}
              alt={`level-star-${num}`}
              className={cn('w-full h-full select-none', !isActive && 'opacity-60 saturate-0')}
              draggable={false}
            />
            <div
              className="absolute inset-0 flex items-center justify-center text-white font-exo2 font-bold"
              style={{
                fontSize: Math.round(size * 0.27),
                textShadow:
                  '0px 0.5px 0px rgba(1,1,14,1), 0px 0.7px 1px rgba(1,1,14,1)',
              }}
            >
              {num}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default LevelStars;


