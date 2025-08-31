import Overlay from '../../../shared/ui/overlay/Overlay';
import styles from './LootBoxOverlay.module.css';
import lootboxModal from '../../../assets/lootbox/lootbox_modal.png';

type LootBoxOverlayProps = {
  open: boolean;
  onClose: () => void;
  price: number | string;
  className?: string;
  confirmLabel?: string;
  balance?: number | string;
  username?: string;
  productName?: string;
  collectionName?: string;
  merchantName?: string;
  imageSrc?: string;
};

export const LootBoxOverlay = ({
  open,
  onClose,
  price,
  className = '',
  confirmLabel = 'Confirm and Pay',
  balance = 14555,
  username = '@TopTierAuthentics',
  productName = 'Racer Box',
  collectionName = 'Top Speed: Racing Legends',
  merchantName = 'Top Tier Authentics',
  imageSrc,
}: LootBoxOverlayProps) => {
  const priceText = typeof price === 'number' ? price.toLocaleString('ru-RU') : price;
  const balanceText = typeof balance === 'number' ? balance.toLocaleString('ru-RU') : balance;

  // Figma assets stored by Dev Mode MCP in public/figma
  const starIcon = '/figma/6832f4d89e098dd919fc7b91a299d8008b1941fe.svg';

  return (
    <Overlay open={open} onClose={onClose} className="bg-black/60 items-end">
      <div
        className={`w-full rounded-t-[36px] overflow-hidden mt-auto bg-[var(--tg-bg-dark)] pt-2 pb-6 relative ${styles.card} ${className}`}
      >
        <div className="flex items-start justify-between px-4 pt-2">
          <div className="flex flex-col gap-1">
            <span className="text-[14px] text-white/80">Balance</span>
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
              >
                <path
                  d="M6.4457 0.274413L7.88611 3.27613C7.94755 3.38232 8.04312 3.50975 8.13869 3.58055C8.65751 3.96992 10.6713 3.89913 11.4359 4.12567C12.2005 4.35221 12.0025 4.69911 11.8933 5.14512L9.42891 7.75746C9.34699 8.77691 9.71562 9.89547 9.74293 10.9078C9.77024 11.9202 9.42208 12.168 8.65068 11.899C7.76323 11.5875 6.87578 10.745 5.95419 10.4618L3.12117 11.9061C2.68427 12.0901 2.19276 11.5521 2.19276 11.1344C2.19276 10.7167 2.40438 9.4353 2.56139 9.05301C3.04608 7.89197 5.16914 7.31145 6.17264 6.6389C7.17615 5.96634 6.36378 6.33448 6.09755 6.34864C4.8005 6.41235 2.64331 7.26189 1.52376 6.54686C1.27118 6.38403 0.213059 5.49201 0.0970076 5.26547C-0.162402 4.75575 0.124314 4.24602 0.649959 4.11151C1.61933 3.87081 2.78667 3.96992 3.75604 3.65134C3.85844 3.56639 3.91988 3.43896 3.98814 3.32568C4.44552 2.53986 4.93021 0.989446 5.43537 0.366448C5.94054 -0.256549 6.10438 0.054949 6.43888 0.281493L6.4457 0.274413Z"
                  fill="#FFA100"
                />
              </svg>
              <span className="text-[15px] text-white font-semibold">{balanceText}</span>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="cursor-pointer w-[30px] h-[30px] rounded-2xl flex items-center justify-center backdrop-blur-md"
            style={{ backgroundColor: 'rgba(116,116,128,0.16)' }}
            aria-label="Close"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
            >
              <path
                d="M0.313641 11.6862C0.173482 11.5459 0.0792369 11.3815 0.0309062 11.1929C-0.0125914 10.9995 -0.0101749 10.8109 0.0381558 10.6271C0.0864865 10.4385 0.175898 10.2789 0.306391 10.1483L4.44591 5.99905L0.306391 1.85702C0.175898 1.72645 0.0864865 1.56686 0.0381558 1.37826C-0.00534181 1.18965 -0.00534181 1.00105 0.0381558 0.812446C0.0864865 0.623843 0.178315 0.459419 0.313641 0.319175C0.4538 0.174096 0.618124 0.0797938 0.806614 0.0362699C0.999936 -0.00725398 1.19084 -0.00725398 1.37933 0.0362699C1.56782 0.0797938 1.72973 0.16926 1.86506 0.304667L6.00458 4.43944L10.1369 0.304667C10.2722 0.16926 10.4341 0.0797938 10.6226 0.0362699C10.8111 -0.01209 10.9971 -0.01209 11.1808 0.0362699C11.3693 0.0846298 11.536 0.178932 11.681 0.319175C11.8212 0.459419 11.9154 0.623843 11.9638 0.812446C12.0121 1.00105 12.0121 1.18965 11.9638 1.37826C11.9203 1.56202 11.8308 1.72403 11.6955 1.86427L7.56324 5.99905L11.6955 10.1411C11.8308 10.2765 11.9203 10.4385 11.9638 10.6271C12.0072 10.8157 12.0048 11.0043 11.9565 11.1929C11.913 11.3815 11.8212 11.5459 11.681 11.6862C11.5409 11.8264 11.3765 11.9183 11.188 11.9618C10.9996 12.0102 10.8111 12.0126 10.6226 11.9691C10.4341 11.9256 10.2722 11.8337 10.1369 11.6934L6.00458 7.55865L1.86506 11.7007C1.72973 11.8313 1.56782 11.9183 1.37933 11.9618C1.19568 12.0102 1.00719 12.0102 0.813863 11.9618C0.625374 11.9183 0.458633 11.8264 0.313641 11.6862Z"
                fill="white"
                fill-opacity="0.6"
              />
            </svg>
          </button>
        </div>

        <div className="px-4">
          <div className="w-[128px] h-[128px] absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <img src={lootboxModal} alt="lootbox modal" className="w-full h-full" />
          </div>
          <div className="mt-6 rounded-xl p-2"></div>
          <div className="flex justify-center">
            <div
              className="-mt-5 flex items-center gap-2 px-3 py-1 rounded-3xl border-8"
              style={{ backgroundColor: '#FFA100', borderColor: 'var(--tg-bg-dark)' }}
            >
              <img src={starIcon} alt="" className="w-4 h-4" />
              <span className="text-white text-[15px] font-bold">{priceText}</span>
            </div>
          </div>
        </div>

        {/* Title, username, description */}
        <div className="px-6 mt-4 text-center">
          <h2 className="text-white text-[20px] font-semibold">Confirm Your Purchase</h2>
          <div className="text-[#0A84FF] text-[14px] mt-1">{username}</div>
          <p className="text-white text-[15px] leading-relaxed mt-5">
            Do you want to buy <span className="font-semibold">{productName}</span> from{' '}
            <span className="font-semibold">{collectionName}</span> in{' '}
            <span className="font-semibold">{merchantName}</span> for{' '}
            <span className="font-semibold">{priceText}</span> Stars?
          </p>
        </div>

        {/* CTA */}
        <div className="px-4 mt-6">
          <button
            type="button"
            className="cursor-pointer w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-[12px] bg-[#007aff]"
          >
            <span className="text-white text-[17px] font-semibold tracking-[-0.43px]">
              {confirmLabel}
            </span>
            <div className="flex items-center gap-1">
              <img src={starIcon} alt="" className="w-[17px] h-4" />
              <span className="text-white text-[16px] font-semibold">{priceText}</span>
            </div>
          </button>
        </div>
      </div>
    </Overlay>
  );
};
