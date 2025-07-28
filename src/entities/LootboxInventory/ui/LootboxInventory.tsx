import ChevronIcon from '../../../assets/icons/chevron-white.svg';
import type { LootboxInventoryProps } from './LootboxInventory.props';

export const LootboxInventory = ({ lootboxIcon, title, description }: LootboxInventoryProps) => {
  return (
    <div className="px-[8px] py-[16px] flex items-center">
      <div className="icon-container mr-[8px]">
        <img src={lootboxIcon} alt="lootbox" />
      </div>
      <div className="description-container">
        <div className="font-bold text-[16px] text-white">{title}</div>
        <div className="font-normal text-[12px] text-gray-500">{description}</div>
      </div>
      <div className="ml-auto">
        <button className="p-1 cursor-pointer">
          <img src={ChevronIcon} alt="chevron" className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};
