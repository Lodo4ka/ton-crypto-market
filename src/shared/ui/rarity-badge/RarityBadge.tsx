interface RarityBadgeProps {
  rarity: 'LEGENDARY' | 'RARE' | 'EPIC' | 'UNCOMMON' | 'COMMON';
  className?: string;
}

const rarityColors = {
  LEGENDARY: '#FF9411', // orange из Figma
  RARE: '#4B69FF', // blue из Figma
  EPIC: '#9F4FFF', // purple
  UNCOMMON: '#B0C3D9', // gray из Figma
  COMMON: '#72C0EC', // blue
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
