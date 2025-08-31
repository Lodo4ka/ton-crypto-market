import { RarityBadge } from '../rarity-badge/RarityBadge';

interface LootboxCardProps {
  name: string;
  rarity: 'LEGENDARY' | 'RARE' | 'EPIC' | 'UNCOMMON' | 'COMMON';
  image: string;
  verified?: boolean;
  onClick?: () => void;
  className?: string;
}

// Иконка звезды для верификации (из Figma)
const VerificationIcon = () => (
  <div className="relative w-3 h-3">
    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="13" viewBox="0 0 12 13" fill="none">
      <path
        d="M3.11805 1.12626C3.16402 0.573858 3.81492 0.304246 4.23804 0.662344C5.25501 1.52305 6.74499 1.52305 7.76196 0.662344C8.18508 0.304246 8.83598 0.573858 8.88195 1.12626C8.99245 2.45398 10.046 3.50755 11.3737 3.61805C11.9261 3.66402 12.1958 4.31492 11.8377 4.73804C10.977 5.75501 10.977 7.24499 11.8377 8.26196C12.1958 8.68508 11.9261 9.33598 11.3737 9.38195C10.046 9.49245 8.99245 10.546 8.88195 11.8737C8.83598 12.4261 8.18508 12.6958 7.76196 12.3377C6.74499 11.477 5.25501 11.477 4.23804 12.3377C3.81492 12.6958 3.16402 12.4261 3.11805 11.8737C3.00755 10.546 1.95398 9.49245 0.626259 9.38195C0.0738584 9.33598 -0.195754 8.68508 0.162344 8.26196C1.02305 7.24499 1.02305 5.75501 0.162344 4.73804C-0.195754 4.31492 0.0738584 3.66402 0.626259 3.61805C1.95398 3.50755 3.00755 2.45398 3.11805 1.12626Z"
        fill="#007AFF"
      />
      <path
        d="M7.72333 4.07085C7.84067 3.90023 8.07417 3.85685 8.24482 3.97417C8.41534 4.09148 8.45865 4.32504 8.3415 4.49565L5.59125 8.49541C5.52527 8.59138 5.41824 8.65182 5.30194 8.65801C5.2148 8.66261 5.13001 8.63602 5.06098 8.5855L4.99726 8.52764L3.49726 6.77715L3.45404 6.71489C3.36942 6.5624 3.4007 6.36626 3.53827 6.24834C3.67588 6.13054 3.87445 6.12963 4.01215 6.23662L4.06708 6.28935L5.24921 7.66851L7.72333 4.07085Z"
        fill="black"
      />
    </svg>
  </div>
);

export const LootboxCard = ({
  name,
  rarity,
  image,
  verified = true,
  onClick,
  className = '',
}: LootboxCardProps) => {
  return (
    <div
      className={`
        bg-white/5
        border border-white/5
        rounded-xl
        flex flex-col items-center
        gap-2
        p-1 pb-2
        cursor-pointer
        transition-transform
        hover:scale-105
        ${className}
      `}
      onClick={onClick}
    >
      {/* Изображение лутбокса */}
      <div className="relative w-full aspect-square rounded-lg overflow-hidden">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>

      {/* Информация о лутбоксе */}
      <div className="flex flex-col gap-0.5 px-2 w-full">
        {/* Название и верификация */}
        <div className="flex items-center gap-1">
          <h3 className="text-white text-sm font-normal leading-tight font-['Russo_One'] min-w-0 whitespace-nowrap overflow-hidden text-ellipsis">
            {name}
          </h3>
          {verified && <VerificationIcon />}
        </div>

        {/* Редкость */}
        <RarityBadge rarity={rarity} className="self-start" />
      </div>
    </div>
  );
};
