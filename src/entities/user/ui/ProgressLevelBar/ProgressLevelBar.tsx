import cn from 'classnames';
import styles from './ProgressLevelBar.module.css';

interface ProgressLevelBarProps {
  currentLevel: number;
  maxLevel: number;
  progressPercent: number; // 0-100
  marks?: number[]; // массив процентов для делений, по умолчанию [0, 25, 50, 75, 100]
  onRulesClick?: () => void;
  className?: string;
}

export const ProgressLevelBar = ({
  currentLevel,
  maxLevel,
  progressPercent,
  marks = [0, 25, 50, 75, 100],
  onRulesClick,
  className,
}: ProgressLevelBarProps) => {
  // Валидация входных данных
  const safePercent = Math.max(0, Math.min(progressPercent, 100));
  const safeLevel = Math.max(0, Math.min(currentLevel, maxLevel));

  return (
    <div
      className={cn(
        'w-full bg-[#232323] rounded-2xl px-[16px] py-[12px] flex flex-col gap-4',
        className,
      )}
    >
      {/* Заголовок и блок Rules */}
      <div className="flex items-center justify-between text-[12px] font-exo2">
        <div className="text-white">
          Current level: <span className="text-[#72C0EC]">LEVEL {safeLevel}</span>
        </div>
        <button
          type="button"
          className="flex items-center gap-1 text-gray-300 hover:text-white transition-colors text-[12px] font-exo2"
          onClick={onRulesClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
          >
            <path
              d="M6 8.5C6.14167 8.5 6.2605 8.452 6.3565 8.356C6.4525 8.26 6.50033 8.14133 6.5 8V6C6.5 5.85833 6.452 5.73967 6.356 5.644C6.26 5.54833 6.14133 5.50033 6 5.5C5.85867 5.49967 5.74 5.54767 5.644 5.644C5.548 5.74033 5.5 5.859 5.5 6V8C5.5 8.14167 5.548 8.2605 5.644 8.3565C5.74 8.4525 5.85867 8.50033 6 8.5ZM6 4.5C6.14167 4.5 6.2605 4.452 6.3565 4.356C6.4525 4.26 6.50033 4.14133 6.5 4C6.49967 3.85867 6.45167 3.74 6.356 3.644C6.26033 3.548 6.14167 3.5 6 3.5C5.85833 3.5 5.73967 3.548 5.644 3.644C5.54833 3.74 5.50033 3.85867 5.5 4C5.49967 4.14133 5.54767 4.26017 5.644 4.3565C5.74033 4.45283 5.859 4.50067 6 4.5ZM6 11C5.30833 11 4.65833 10.8687 4.05 10.606C3.44167 10.3433 2.9125 9.98717 2.4625 9.5375C2.0125 9.08783 1.65633 8.55867 1.394 7.95C1.13167 7.34133 1.00033 6.69133 1 6C0.999667 5.30867 1.131 4.65867 1.394 4.05C1.657 3.44133 2.01317 2.91217 2.4625 2.4625C2.91183 2.01283 3.441 1.65667 4.05 1.394C4.659 1.13133 5.309 1 6 1C6.691 1 7.341 1.13133 7.95 1.394C8.559 1.65667 9.08817 2.01283 9.5375 2.4625C9.98683 2.91217 10.3432 3.44133 10.6065 4.05C10.8698 4.65867 11.001 5.30867 11 6C10.999 6.69133 10.8677 7.34133 10.606 7.95C10.3443 8.55867 9.98817 9.08783 9.5375 9.5375C9.08683 9.98717 8.55767 10.3435 7.95 10.6065C7.34233 10.8695 6.69233 11.0007 6 11Z"
              fill="#AFB0B0"
            />
          </svg>
          Rules
        </button>
      </div>
      {/* Прогресс-бар с делениями */}
      <div className="flex flex-col gap-2 w-full">
        <div className="relative flex items-center w-full h-6">
          {/* Линия прогресса */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-[#353535] rounded-full" />
          <div
            className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-[#72C0EC] rounded-full transition-all"
            style={{ width: `${safePercent}%`, zIndex: 1 }}
          />
          {/* Деления-кружки */}
          {marks.map((mark) => {
            const isActive = safePercent >= mark;
            return (
              <div key={mark} className="absolute" style={{ left: `calc(${mark}% - 6px)` }}>
                <div
                  className={`w-3 h-3 rounded-full flex items-center justify-center ${styles.circleProgressBar} ${isActive ? 'bg-[#72C0EC]' : 'bg-[#5E5E5E]'}`}
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
                className={`text-[10px] font-semibold ${isActive ? 'text-[#72C0EC]' : 'text-[#5E5E5E]'}`}
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
