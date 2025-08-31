export const StickerTitle = ({ stickerIcon, title }: { stickerIcon: string; title: string }) => {
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
    </>
  );
};
