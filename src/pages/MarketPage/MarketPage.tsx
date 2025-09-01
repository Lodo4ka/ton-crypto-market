import { useState } from 'react';

import { TonFilter } from '../../entities/ton/TonFilter.tsx';
import { TonEnergy } from '../../entities/ton/TonEnergy.tsx';
import cars1 from '../../assets/lootbox/cars_1.png';
import cars2 from '../../assets/lootbox/cars_2.png';
import carsSmall from '../../assets/lootbox/cars_small.png';
import { SearchBar } from '../../entities/market/SearchBar.tsx';
import { MarketCard } from '../../entities/market/MarketCard.tsx';
import type { MarketItem } from '../../entities/market/market.props.ts';

const ITEMS: MarketItem[] = [
  {
    id: '1',
    title: 'King',
    rarity: 'LEGENDARY',
    image: cars1,
    imageSmall: carsSmall,
    code: '#425',
  },
  {
    id: '2',
    title: 'Crazy Racer',
    rarity: 'RARE',
    image: cars2,
    imageSmall: carsSmall,
    code: '#11025',
  },
  {
    id: '3',
    title: 'King',
    rarity: 'LEGENDARY',
    image: cars1,
    imageSmall: carsSmall,
    code: '#425',
  },
  {
    id: '4',
    title: 'Crazy Racer',
    rarity: 'RARE',
    image: cars2,
    imageSmall: carsSmall,
    code: '#11025',
  },
  {
    id: '5',
    title: 'King',
    rarity: 'LEGENDARY',
    image: cars1,
    imageSmall: carsSmall,
    code: '#425',
  },
  {
    id: '6',
    title: 'Crazy Racer',
    rarity: 'RARE',
    image: cars2,
    imageSmall: carsSmall,
    code: '#11025',
  },
];

export const MarketPage = () => {
  const [search, setSearch] = useState('');

  const filtered = ITEMS.filter((it) =>
    it.title.toLowerCase().includes(search.toLowerCase().trim()),
  );

  return (
    <div className="flex flex-col gap-4 pb-[90px]">
      {/* Header: energy + TON balance */}
      <div className="flex items-center justify-between">
        <TonEnergy energy={200} />
        <TonFilter ton={100} onAddTon={() => {}} />
      </div>

      {/* Search + actions */}
      <div className="flex items-center gap-1">
        <SearchBar search={search} setSearch={setSearch} />
      </div>

      {/* Grid 2 columns */}
      <div className="grid grid-cols-2 gap-2">
        {filtered.map((item) => (
          <MarketCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};
