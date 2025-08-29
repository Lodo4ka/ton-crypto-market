import { NFTInfo } from '../shared/ui/nft-info/NFTInfo.tsx';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y } from 'swiper/modules';
import { useState } from 'react';

import sticker1 from '../assets/market/sticker1.png';
import sticker2 from '../assets/market/sticker2.png';
import sticker3 from '../assets/market/sticker3.png';
import sticker4 from '../assets/market/sticker4.png';
import sticker5 from '../assets/market/sticker5.png';
import sticker6 from '../assets/market/sticker6.png';
import { BigPillFillButton } from '../shared/ui/big-pill-button/BigPillBtn.tsx';
import { StickerPackOpenModal } from '../entities/stickerPack/StickerPackOpenModal';
import { StickerAddedSnackbar } from '../shared/ui/snackbar/StickerAddedSnackbar';

export const StickerPack = () => {
  const stickers = [sticker1, sticker2, sticker3, sticker4, sticker5, sticker6];
  const [activeIdx, setActiveIdx] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="bg-[var(--tg-bg-black)] text-white">
      <StickerAddedSnackbar />

      <div className="pt-4">
        <NFTInfo
          title="The Dye Cut Pack"
          collection="Armor Collection"
          description="Limited edition Sticker Pack collection inspired by classic 16-bit gaming."
          className=""
        />
      </div>

      {/* Rarity badge */}
      <div className="px-4 mt-2">
        <span className="text-[#72c0ec] text-[14px] font-semibold tracking-wide">COMMON</span>
      </div>

      {/* Main preview */}
      <div className="px-4 mt-2">
        <div className="w-full aspect-square rounded-2xl overflow-hidden bg-[#c7d7ea] flex items-center justify-center">
          <img
            src={stickers[activeIdx]}
            alt={`Sticker ${activeIdx + 1}`}
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      {/* Thumbnails slider */}
      <div className="mt-4 px-4">
        <Swiper
          modules={[Pagination, A11y]}
          slidesPerView={3.5}
          spaceBetween={12}
          className="w-full"
        >
          {stickers.map((src, index) => (
            <SwiperSlide key={index}>
              <button
                type="button"
                onClick={() => setActiveIdx(index)}
                className={`w-full aspect-square rounded-2xl overflow-hidden flex items-center justify-center cursor-pointer bg-[#c7d7ea]`}
              >
                <img
                  src={src}
                  alt={`Thumb ${index + 1}`}
                  className="w-full h-full object-contain"
                />
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* CTA */}
      <div className="px-4 mt-6">
        <BigPillFillButton color="yellow" label="Open" onClick={() => setOpenModal(true)} />
      </div>

      <StickerPackOpenModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        images={stickers}
      />
    </div>
  );
};
