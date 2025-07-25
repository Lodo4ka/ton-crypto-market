import cn from 'classnames';
interface ProgressLevelBarProps {
  currentLevel: number;
  maxLevel: number;
  progressPercent: number; // 0-100
  marks: number[]; // массив процентов для делений
  onRulesClick?: () => void;
  className?: string;
}

export const ProgressLevelBar = ({
  currentLevel,
  maxLevel,
  progressPercent,
  marks,
  onRulesClick,
  className,
}: ProgressLevelBarProps) => {
  // Валидация входных данных
  const safePercent = Math.max(0, Math.min(progressPercent, 100));
  const safeLevel = Math.max(0, Math.min(currentLevel, maxLevel));

  return (
    <div className={cn('w-full bg-[#232323] rounded-2xl p-6 flex flex-col gap-4', className)}>
      {/* Заголовок и блок Rules */}
      <div className="flex items-center justify-between">
        <div className="text-white text-lg font-semibold">
          CURRENT LEVEL: <span className="text-[#38E54D]">LEVEL {safeLevel}</span>
        </div>
        <button
          type="button"
          className="flex items-center gap-1 text-gray-300 hover:text-white transition-colors text-base font-medium"
          onClick={onRulesClick}
        >
          <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
            <circle cx="10" cy="10" r="10" fill="#BDBDBD" />
            <text x="10" y="15" textAnchor="middle" fontSize="13" fill="#232323" fontWeight="bold">
              i
            </text>
          </svg>
          Rules
        </button>
      </div>
      {/* Прогресс-бар с делениями */}
      <div className="flex flex-col gap-2 w-full">
        <div className="relative flex items-center w-full h-6">
          {/* Линия прогресса */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-2 bg-[#353535] rounded-full" />
          <div
            className="absolute left-0 top-1/2 -translate-y-1/2 h-2 bg-[#38E54D] rounded-full transition-all"
            style={{ width: `${safePercent}%`, zIndex: 1 }}
          />
          {/* Деления-кружки */}
          {marks.map((mark) => {
            const isActive = safePercent >= mark;
            return (
              <div key={mark} className="absolute" style={{ left: `calc(${mark}% - 12px)` }}>
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center ${isActive ? 'bg-[#38E54D]' : 'bg-[#444]'}`}
                  style={{ boxShadow: isActive ? '0 0 0 4px #232323' : 'none' }}
                >
                  {/* Пусто, просто кружок */}
                </div>
              </div>
            );
          })}
        </div>
        {/* Подписи процентов */}
        <div className="flex justify-between mt-1">
          {marks.map((mark) => {
            const isActive = safePercent >= mark;
            return (
              <span
                key={mark}
                className={`text-sm font-semibold ${isActive ? 'text-[#38E54D]' : 'text-[#666]'}`}
                style={{ minWidth: 32, textAlign: 'center' }}
              >
                {mark}%
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};
