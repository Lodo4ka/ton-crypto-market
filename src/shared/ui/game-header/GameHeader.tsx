import type { FC } from 'react';

export type GameHeaderProps = {
  avatarSrc: string;
  title: string;
  subtitle: string;
  className?: string;
};

export const GameHeader: FC<GameHeaderProps> = ({ avatarSrc, title, subtitle, className }) => {
  return (
    <div className={`mt-6 flex items-center gap-3 ${className ?? ''}`.trim()}>
      <div className="w-12 h-12 rounded-full overflow-hidden shrink-0">
        <img
          src={avatarSrc}
          alt="Game avatar"
          width={48}
          height={48}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 flex flex-col justify-center pr-2">
        <div className="text-white font-russo text-[20px] leading-[1.2]">{title}</div>
        <div className="text-[12px] text-[var(--text-gray)]">{subtitle}</div>
      </div>
    </div>
  );
};

export default GameHeader;
