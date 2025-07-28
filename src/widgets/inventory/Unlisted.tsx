import { LootboxInventory } from '../../entities/LootboxInventory/ui/LootboxInventory';
import CarImage from '../../assets/lootbox/car.png';
import GlovesImage from '../../assets/lootbox/gloves.png';
import { useState } from 'react';
import type { LootboxInventoryProps } from '../../entities/LootboxInventory/ui/LootboxInventory.props';

export const Unlisted = () => {
  const [unlistedItems, setUnlistedItems] = useState<LootboxInventoryProps[]>([
    {
      lootboxIcon: CarImage,
      title: 'Top Speed: Racing Legends',
      description: '5 items',
    },
    {
      lootboxIcon: GlovesImage,
      title: 'Boxing. Ring Warriors',
      description: '0 items',
    },
  ]);

  return (
    <div className="flex flex-col gap-[16px]">
      {unlistedItems.map((item) => (
        <LootboxInventory
          key={item.title}
          lootboxIcon={item.lootboxIcon}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  );
};
