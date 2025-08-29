import { useState } from 'react';
import { Checkbox } from '../../../shared/ui/Checkbox/Checkbox.tsx';
import { ButtonClose } from '../../../shared/ui/button-close/ButtonClose.tsx';

interface FilterModalProps {
  className?: string;
  onApply?: (filters: FilterState) => void;
  onReset?: () => void;
  onClose: () => void;
}

interface FilterState {
  games: string[];
  assetTypes: string[];
  rarity: string[];
}

const GAMES = ['Top Speed: Racing Legends', 'Boxing: Ring Warriors'];

const ASSET_TYPES = ['Decals', 'Logos', 'Wheels'];

const RARITY_OPTIONS = [
  { value: 'LEGENDARY', color: 'text-[#FF8C00]' },
  { value: 'MYSTICAL', color: 'text-[#2563EB]' },
  { value: 'COMMON', color: 'text-[#9CA3AF]' },
];

export const FilterModal = ({ className = '', onApply, onReset, onClose }: FilterModalProps) => {
  const [filters, setFilters] = useState<FilterState>({
    games: [],
    assetTypes: [],
    rarity: [],
  });

  const handleCheckboxChange = (category: keyof FilterState, value: string) => {
    setFilters((prev) => ({
      ...prev,
      [category]: prev[category].includes(value)
        ? prev[category].filter((item) => item !== value)
        : [...prev[category], value],
    }));
  };

  const handleReset = () => {
    setFilters({
      games: [],
      assetTypes: [],
      rarity: [],
    });
    onReset?.();
  };

  const handleApply = () => {
    onApply?.(filters);
  };

  return (
    <div className={`bg-[#2A2A2A] rounded-2xl p-6 w-full max-w-md ${className}`}>
      <div className="flex justify-end mb-4">
        <ButtonClose onClose={onClose} />
      </div>
      {/* Games Section */}
      <div className="mb-8">
        <h3 className="text-white text-xl font-medium mb-4">Games</h3>
        <div className="space-y-3">
          {GAMES.map((game) => (
            <Checkbox
              key={game}
              type={game}
              checked={filters.games.includes(game)}
              onChange={() => handleCheckboxChange('games', game)}
            />
          ))}
        </div>
      </div>

      {/* Assets Types Section */}
      <div className="mb-8">
        <h3 className="text-white text-xl font-medium mb-4">Assets Types</h3>
        <div className="space-y-3">
          {ASSET_TYPES.map((type) => (
            <Checkbox
              key={type}
              type={type}
              checked={filters.assetTypes.includes(type)}
              onChange={() => handleCheckboxChange('assetTypes', type)}
            />
          ))}
        </div>
      </div>

      {/* Rarity Section */}
      <div className="mb-8">
        <h3 className="text-white text-xl font-medium mb-4">Rarity</h3>
        <div className="space-y-3">
          {RARITY_OPTIONS.map((rarity) => (
            <Checkbox
              key={rarity.value}
              type={rarity.value}
              checked={filters.rarity.includes(rarity.value)}
              onChange={() => handleCheckboxChange('rarity', rarity.value)}
            />
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4">
        <button
          type="button"
          onClick={handleReset}
          className="flex-1 bg-[#4A5568] text-white text-lg font-medium py-3 rounded-xl cursor-pointer hover:bg-[#5A6578] transition-colors"
        >
          Reset All
        </button>
        <button
          type="button"
          onClick={handleApply}
          className="flex-1 bg-[#2563EB] text-white text-lg font-medium py-3 rounded-xl cursor-pointer hover:bg-[#1D4ED8] transition-colors"
        >
          Apply
        </button>
      </div>
    </div>
  );
};
