import type { Rarity } from '../../shared/ui/rarity-badge/rarity.props';

export type MarketItem = {
  id: string;
  title: string;
  rarity: Rarity;
  image: string;
  imageSmall: string;
  code: string;
};
