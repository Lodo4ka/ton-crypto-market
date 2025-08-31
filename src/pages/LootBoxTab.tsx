import { LootboxCard } from '../shared/ui/lootbox-card/LootboxCard';

// Figma assets - скачанные изображения лутбоксов
const yellowWindImg = '/figma/lootbox_yellow_wind.png';
const unstoppableOrangeImg = '/figma/lootbox_unstoppable_orange.png';
const unstoppableOrange2Img = '/figma/lootbox_unstoppable_orange_2.png';
const yellowWind2Img = '/figma/lootbox_yellow_wind_2.png';

type LootBox = {
  id: string;
  name: string;
  rarity: 'LEGENDARY' | 'RARE' | 'EPIC' | 'UNCOMMON' | 'COMMON';
  image: string;
  verified: boolean;
};

const MOCK_LOOTBOXES: LootBox[] = [
  {
    id: '1',
    name: 'Yellow Wind',
    rarity: 'LEGENDARY',
    image: yellowWindImg,
    verified: true,
  },
  {
    id: '2',
    name: 'Unstoppable Orange',
    rarity: 'LEGENDARY',
    image: unstoppableOrangeImg,
    verified: true,
  },
  {
    id: '3',
    name: 'Unstoppable Orange',
    rarity: 'UNCOMMON',
    image: unstoppableOrange2Img,
    verified: true,
  },
  {
    id: '4',
    name: 'Yellow Wind',
    rarity: 'RARE',
    image: yellowWind2Img,
    verified: true,
  },
];

export const LootBoxTab = () => {
  const handleLootboxClick = (lootbox: LootBox) => {
    console.log('Lootbox clicked:', lootbox);
    // Здесь можно добавить логику открытия лутбокса или навигации
  };

  return (
    <div className="grid grid-cols-2 gap-2">
      {MOCK_LOOTBOXES.map((lootbox) => (
        <LootboxCard
          key={lootbox.id}
          name={lootbox.name}
          rarity={lootbox.rarity}
          image={lootbox.image}
          verified={lootbox.verified}
          onClick={() => handleLootboxClick(lootbox)}
          className="w-full"
        />
      ))}
    </div>
  );
};
