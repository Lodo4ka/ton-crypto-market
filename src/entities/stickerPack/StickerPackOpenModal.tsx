import Overlay from '../../shared/ui/overlay/Overlay';
// import { ButtonClose } from '../../shared/ui/button-close/ButtonClose';
// import { BigPillFillButton } from '../../shared/ui/big-pill-button/BigPillBtn';
import { Swiper, SwiperSlide } from 'swiper/react';

interface StickerPackOpenModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  subtitle?: string;
  images: string[];
}

export const StickerPackOpenModal = ({
  open,
  onClose,
  title = 'The Dye Cut Pack',
  subtitle = '@TopTierAuthentics',
  images,
}: StickerPackOpenModalProps) => {
  const addLabel = `Add ${images.length} Stickers`;
  return (
    <Overlay open={open} onClose={onClose} className="bg-black/40">
      <div className="w-full relative">
        <div className="w-full rounded-t-[28px] mt-auto bg-[var(--tg-bg-dark)] pt-2 pb-8 min-h-[70vh] flex flex-col">
          {/* Top bar with Back and title */}
          <div className="flex items-center justify-between px-4 h-12">
            <button
              type="button"
              onClick={onClose}
              className="text-[#0A84FF] text-[18px] font-semibold cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="21"
                  viewBox="0 0 12 21"
                  fill="none"
                >
                  <path
                    d="M10.5 1.5L1.5 10.5L10.5 19.5"
                    stroke="#007AFF"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Back
              </div>
            </button>
            <div className="flex flex-col items-center">
              <h2 className="text-white text-[20px] font-semibold leading-tight">{title}</h2>
              <span className="text-[#9CA3AF] text-[14px] leading-tight">{subtitle}</span>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="29"
              viewBox="0 0 28 29"
              fill="none"
            >
              <path
                d="M13.9998 2.7002C20.5167 2.7002 25.7995 7.98313 25.7996 14.5C25.7996 21.017 20.5167 26.2998 13.9998 26.2998C7.48289 26.2997 2.19995 21.0169 2.19995 14.5C2.20006 7.98319 7.48295 2.7003 13.9998 2.7002ZM13.9998 4.2998C8.36661 4.29991 3.79967 8.86685 3.79956 14.5C3.79956 20.1332 8.36654 24.7001 13.9998 24.7002C19.6331 24.7002 24.2 20.1333 24.2 14.5C24.1998 8.86679 19.633 4.2998 13.9998 4.2998ZM8.99976 13.25C9.69005 13.25 10.2496 13.8097 10.2498 14.5C10.2498 15.1904 9.69011 15.75 8.99976 15.75C8.30951 15.7499 7.74976 15.1903 7.74976 14.5C7.74986 13.8098 8.30958 13.2501 8.99976 13.25ZM13.9998 13.25C14.69 13.25 15.2496 13.8097 15.2498 14.5C15.2498 15.1904 14.6901 15.75 13.9998 15.75C13.3095 15.7499 12.7498 15.1903 12.7498 14.5C12.7499 13.8098 13.3096 13.2501 13.9998 13.25ZM18.9998 13.25C19.69 13.25 20.2496 13.8097 20.2498 14.5C20.2498 15.1904 19.6901 15.75 18.9998 15.75C18.3095 15.7499 17.7498 15.1903 17.7498 14.5C17.7499 13.8098 18.3096 13.2501 18.9998 13.25Z"
                fill="#007AFF"
              />
            </svg>
          </div>

          {/* Thumbnails slider */}
          <div className="px-3 mt-3">
            <Swiper slidesPerView={3.8} spaceBetween={12} className="w-full pb-2">
              {images.map((src, idx) => (
                <SwiperSlide key={idx}>
                  <div className="w-[96px] h-[96px] rounded-2xl overflow-hidden bg-[#c7d7ea] flex items-center justify-center">
                    <img
                      src={src}
                      alt={`sticker-${idx}`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Divider */}
          <div className="px-4 mt-3">
            <div className="h-[4px] rounded-full bg-[rgba(255,255,255,0.12)]" />
          </div>

          {/* Bottom CTA */}
          <div className="px-4 mt-auto">
            <button
              type="button"
              className="w-full py-[14px] rounded-[12px] bg-[#0A84FF] text-white text-[17px] font-semibold cursor-pointer"
            >
              {addLabel}
            </button>
          </div>
        </div>
      </div>
    </Overlay>
  );
};

export default StickerPackOpenModal;
