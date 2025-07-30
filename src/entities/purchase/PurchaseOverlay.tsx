import Overlay from '../../shared/ui/overlay/Overlay';
import { ButtonClose } from '../../shared/ui/button-close/ButtonClose';
import tonIcon from '../../assets/profile/token-ton.svg';

interface PurchaseOverlayProps {
  open: boolean;
  onClose: () => void;
  productName: string;
  productImage: string;
  price: string;
  username: string;
  className?: string;
}

export const PurchaseOverlay = ({
  open,
  onClose,
  productName,
  productImage,
  price,
  username,
  className = '',
}: PurchaseOverlayProps) => {
  return (
    <Overlay open={open} onClose={onClose} className={`bg-black bg-opacity-60 ${className}`}>
      <div className="w-full h-[444px] relative">
        {/* Background */}
        <div
          className="absolute bottom-0 w-full h-[387px] rounded-t-3xl"
          style={{ backgroundColor: 'var(--tg-bg-dark)' }}
        >
          {/* Navigation Bar */}
          <div className="flex justify-between items-center px-4 pt-4 h-16">
            <div className="flex-1"></div>
            <div className="flex justify-end">
              <div
                className="w-[30px] h-[30px] rounded-2xl flex items-center justify-center backdrop-blur-md"
                style={{ backgroundColor: 'rgba(116, 116, 128, 0.16)' }}
              >
                <ButtonClose onClose={onClose} className="!w-3 !h-3 !bg-transparent !p-0" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="px-4">
            {/* Cover Image */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-40">
              <div
                className="w-full h-full rounded-full"
                style={{ backgroundColor: 'var(--tg-bg-dark)' }}
              >
                <div className="w-32 h-32 rounded-full absolute top-4 left-4 overflow-hidden">
                  <img
                    src={productImage}
                    alt={productName}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Price Badge */}
            <div
              className="absolute top-[145px] left-1/2 transform -translate-x-1/2 flex items-center gap-2 px-3 py-1 rounded-3xl border-8"
              style={{
                backgroundColor: 'var(--tg-bg-blue)',
                borderColor: 'var(--tg-bg-dark)',
              }}
            >
              <img src={tonIcon} alt="TON" className="w-4 h-4" />
              <span
                className="text-white text-[15px] font-bold"
                style={{ fontFamily: 'Open Sans' }}
              >
                {price}
              </span>
            </div>

            {/* Title */}
            <div className="text-center mt-[140px] mb-2">
              <h2
                className="text-white text-[22px] font-semibold tracking-wider"
                style={{ fontFamily: 'SF Pro Display' }}
              >
                Confirm Your Purchase
              </h2>
            </div>

            {/* Username */}
            <div className="text-center mb-6">
              <span
                className="text-[15px]"
                style={{
                  color: 'var(--tg-bg-blue)',
                  fontFamily: 'SF Pro',
                }}
              >
                {username}
              </span>
            </div>

            {/* Description */}
            <div className="text-center mb-8">
              <p
                className="text-white text-[15px] leading-relaxed"
                style={{ fontFamily: 'SF Pro' }}
              >
                Do you want to buy {productName} for {price} TON?
              </p>
            </div>

            {/* Confirm Button */}
            <div className="px-2">
              <button
                className="w-full flex items-center justify-center gap-2 py-[14px] px-5 rounded-xl cursor-pointer"
                style={{ backgroundColor: 'var(--tg-bg-blue)' }}
              >
                <span
                  className="text-white text-[17px] font-semibold flex-1 text-center"
                  style={{
                    fontFamily: 'Open Sans',
                    letterSpacing: '-0.025em',
                  }}
                >
                  Confirm and Pay
                </span>
                <div className="flex items-center gap-1">
                  <img src={tonIcon} alt="TON" className="w-4 h-4" />
                  <span
                    className="text-white text-[16px] font-semibold"
                    style={{ fontFamily: 'Open Sans' }}
                  >
                    {price}
                  </span>
                </div>
              </button>
            </div>

            {/* Home Indicator */}
            <div className="flex justify-center mt-5 pb-5">
              <div
                className="w-35 h-[5px] rounded-full"
                style={{ backgroundColor: 'var(--tg-bg-white)' }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </Overlay>
  );
};
