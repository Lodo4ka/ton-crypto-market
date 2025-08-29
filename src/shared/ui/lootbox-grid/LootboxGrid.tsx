import { LootboxCard } from '../lootbox-card/LootboxCard';

interface LootboxData {
  id: string;
  name: string;
  rarity: 'LEGENDARY' | 'RARE' | 'EPIC' | 'UNCOMMON' | 'COMMON';
  image: string;
}

interface LootboxGridProps {
  lootboxes: LootboxData[];
  onLootboxClick?: (lootbox: LootboxData) => void;
  className?: string;
}

export const LootboxGrid = ({ lootboxes, onLootboxClick, className = '' }: LootboxGridProps) => {
  return (
    <div className={`grid grid-cols-2 gap-4 ${className}`}>
      {lootboxes.map((lootbox) => (
        <LootboxCard
          key={lootbox.id}
          id={lootbox.id}
          name={lootbox.name}
          rarity={lootbox.rarity}
          image={lootbox.image}
          onClick={() => onLootboxClick?.(lootbox)}
        />
      ))}
    </div>
  );
};
