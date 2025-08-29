interface RarityBadgeProps {
  rarity: 'LEGENDARY' | 'RARE' | 'EPIC' | 'UNCOMMON' | 'COMMON';
  className?: string;
}

const rarityColors = {
  LEGENDARY: '#FF8C00', // orange
  RARE: '#72C0EC', // blue
  EPIC: '#9F4FFF', // purple
  UNCOMMON: '#A8A8A8', // gray
  COMMON: '#72C0EC', // blue
};

export const RarityBadge = ({ rarity, className = '' }: RarityBadgeProps) => {
  return (
    <div
      className={`px-2 py-1 rounded text-sm font-bold uppercase ${className}`}
      style={{ color: rarityColors[rarity] }}
    >
      {rarity}
    </div>
  );
};
