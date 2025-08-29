import { ArrowLeft, MoreHorizontal, ChevronDown } from 'lucide-react';

interface NavigationBarProps {
  title?: string;
  onBack?: () => void;
  showMoreActions?: boolean;
  className?: string;
}

export const NavigationBar = ({
  onBack,
  showMoreActions = true,
  className = '',
}: NavigationBarProps) => {
  return (
    <div className={`bg-[var(--tg-bg-black)] ${className}`}>
      {/* Status Bar */}
      <div className="flex items-center justify-between px-4 pt-3 pb-2 text-white text-sm">
        <span className="font-semibold">9:41</span>
        <div className="flex items-center gap-1">
          <div className="flex gap-1">
            <div className="w-1 h-1 bg-white rounded-full"></div>
            <div className="w-1 h-1 bg-white rounded-full"></div>
            <div className="w-1 h-1 bg-white rounded-full"></div>
            <div className="w-1 h-1 bg-white rounded-full"></div>
          </div>
          <div className="w-6 h-3 border border-white rounded-sm relative">
            <div className="absolute inset-0.5 bg-white rounded-sm"></div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between px-4 py-3">
        <button onClick={onBack} className="flex items-center gap-2 text-white cursor-pointer">
          <ArrowLeft size={16} />
          <span className="text-base">Back</span>
        </button>

        {showMoreActions && (
          <div className="flex items-center gap-3">
            <ChevronDown size={20} className="text-white cursor-pointer" />
            <MoreHorizontal size={20} className="text-white cursor-pointer" />
          </div>
        )}
      </div>
    </div>
  );
};
