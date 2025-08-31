import type { FC } from 'react';

export type SectionHeaderProps = {
  title: string;
  count: number | string;
  className?: string;
};

export const SectionHeader: FC<SectionHeaderProps> = ({ title, count, className }) => {
  return (
    <div className={`flex items-center justify-between px-4 ${className ?? ''}`.trim()}>
      <div className="flex items-center gap-3">
        <span className="text-white font-[var(--font-russo)] text-[20px] leading-[1.2]">
          {title}
        </span>
      </div>
      <div className="flex items-center gap-2 text-[var(--text-gray)]">
        <span className="text-[12px] font-[var(--font-exo2-bold)]">{count}</span>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
        >
          <path
            d="M9 6l6 6-6 6"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
};

export default SectionHeader;


