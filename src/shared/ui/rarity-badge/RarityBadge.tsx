interface RarityBadgeProps {
  rarity: 'LEGENDARY' | 'RARE' | 'EPIC' | 'UNCOMMON' | 'COMMON';
  className?: string;
}

const rarityColors = {
  LEGENDARY: '#FF9411',
  RARE: '#4B69FF',
  EPIC: '#9F4FFF',
  UNCOMMON: '#B0C3D9',
  COMMON: '#72C0EC',
};

export const RarityBadge = ({ rarity, className = '' }: RarityBadgeProps) => {
  return (
    <div
      className={`text-xs font-bold uppercase font-exo2-bold leading-tight ${className}`}
      style={{ color: rarityColors[rarity] }}
    >
      {rarity}
    </div>
  );
};
