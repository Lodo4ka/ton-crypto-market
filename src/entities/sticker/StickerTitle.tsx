export const StickerTitle = ({
  stickerIcon,
  title,
  onViewAllClick,
}: {
  stickerIcon: string;
  title: string;
  onViewAllClick?: () => void;
}) => {
  return (
    <>
      <div className="flex gap-3 items-center">
        <div className="relative size-7">
          <img alt="Collections" className="block max-w-none size-full" src={stickerIcon} />
        </div>
        <div className="font-['Russo_One'] text-[22px] text-white tracking-[0.66px] leading-none">
          {title}
        </div>
      </div>
      {onViewAllClick && (
        <button
          className="text-[#72c0ec] font-exo2-bold text-sm font-medium cursor-pointer"
          onClick={onViewAllClick}
        >
          VIEW ALL
        </button>
      )}
    </>
  );
};
