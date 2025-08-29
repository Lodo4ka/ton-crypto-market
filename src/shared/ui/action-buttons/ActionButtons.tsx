import { Lock, Package } from 'lucide-react';

interface ActionButtonsProps {
  onFindOnMarket?: () => void;
  onGetFromLootbox?: () => void;
  className?: string;
}

export const ActionButtons = ({
  onFindOnMarket,
  onGetFromLootbox,
  className = ''
}: ActionButtonsProps) => {
  return (
    <div className={`bg-[#1F1B1A] border-t border-gray-800 ${className}`}>
      <div className="px-4 py-2">
        <div className="flex gap-2">
          <button
            onClick={onFindOnMarket}
            className="flex-1 bg-gray-700 hover:bg-gray-600 text-white py-3 px-4 rounded-lg flex items-center justify-center gap-3 transition-colors cursor-pointer"
          >
            <Lock size={20} />
            <span className="font-medium">Find on Market</span>
          </button>

          <button
            onClick={onGetFromLootbox}
            className="flex-1 bg-[#F3F084] hover:bg-[#F3F084]/90 text-black py-3 px-4 rounded-lg flex items-center justify-center gap-3 transition-colors cursor-pointer"
          >
            <Package size={20} />
            <span className="font-medium">Get from Lootbox</span>
          </button>
        </div>
      </div>

      {/* Home Indicator */}
      <div className="h-8 flex items-center justify-center">
        <div className="w-36 h-1 bg-white rounded-full"></div>
      </div>
    </div>
  );
};
