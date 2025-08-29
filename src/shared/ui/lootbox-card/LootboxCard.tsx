import { RarityBadge } from '../rarity-badge/RarityBadge.tsx';

interface LootboxCardProps {
  id: string;
  name: string;
  rarity: 'LEGENDARY' | 'RARE' | 'EPIC' | 'UNCOMMON' | 'COMMON';
  image: string;
  onClick?: () => void;
  className?: string;
}

export const LootboxCard = ({ name, rarity, image, onClick, className = '' }: LootboxCardProps) => {
  return (
    <div
      className={`bg-[#1A1A1A] rounded-lg overflow-hidden cursor-pointer transition-transform hover:scale-105 ${className}`}
      onClick={onClick}
    >
      <div className="relative">
        <img src={image} alt={name} className="w-full aspect-square object-cover" />
      </div>
      <div className="p-3">
        <h3 className="text-white font-semibold text-base mb-1">{name}</h3>
        <RarityBadge rarity={rarity} />
      </div>
    </div>
  );
};
