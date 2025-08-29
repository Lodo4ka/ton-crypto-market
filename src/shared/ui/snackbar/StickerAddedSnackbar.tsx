import React from 'react';

type StickerAddedSnackbarProps = {
  className?: string;
  title?: string;
  description?: string;
  imageSrc?: string;
};

export const StickerAddedSnackbar: React.FC<StickerAddedSnackbarProps> = ({
  className = '',
  title = 'Stickers Added',
  description = 'The Dye Cut Pack @TopTierAuthentics was added to your stickers.',
  imageSrc = '/figma/snackbar_paintball6.png',
}) => {
  return (
    <div
      className={`fixed left-0 right-0 bottom-30 z-[1000] px-4 ${className}`}
      role="status"
      aria-live="polite"
    >
      <div className="mx-auto max-w-[480px] w-full rounded-[14px] bg-[rgba(45,45,45,0.8)] backdrop-blur-[20px] px-4 py-[9px] flex items-center">
        <div className="w-[38px] h-[38px] rounded-[8px] overflow-hidden bg-[#B0C3D9] flex items-center justify-center">
          <img src={imageSrc} alt="Sticker preview" className="w-full h-full object-cover" />
        </div>
        <div className="ml-4 flex-1">
          <div className="text-white font-bold text-[16px] leading-[1]">{title}</div>
          <div className="text-white/80 text-[14px] leading-[1.2]">{description}</div>
        </div>
      </div>
    </div>
  );
};

export default StickerAddedSnackbar;
