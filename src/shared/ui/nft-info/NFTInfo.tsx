import { NFTActions } from '../../../features/nft/NFTActions';
import { setPlayButtonComponent } from '../play-button/playButtonSlice';
import styles from './NFTInfo.module.css';

interface NFTInfoProps {
  title: string;
  collection: string;
  description: string;
  nftLabel?: string;
  leftCount?: string;
  totalCount?: string;
  className?: string;
}

export const NFTInfo = ({
  title,
  collection,
  description,
  nftLabel = 'NFT',
  leftCount,
  totalCount,
  className = '',
}: NFTInfoProps) => {
  return (
    <div className={`${className}`}>
      {/* Title and Share */}
      <div className="flex items-center justify-between">
        <h1 className="text-white text-2xl font-['Russo_One'] tracking-wider">{title}</h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
        >
          <g clipPath="url(#clip0_1263_33956)">
            <path
              d="M14 9.5V5.5L21 12.5L14 19.5V15.4C9 15.4 5.5 17 3 20.5C4 15.5 7 10.5 14 9.5Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_1263_33956">
              <rect width="24" height="24" fill="white" transform="matrix(-1 0 0 1 24 0.5)" />
            </clipPath>
          </defs>
        </svg>
      </div>

      {/* Collection */}
      <div className="flex items-center gap-2 mb-4">
        <span className="text-[#AFB0B0] text-base font-exo2-bold ">{collection}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M5.19675 1.04376C5.27337 0.123097 6.35821 -0.326256 7.0634 0.270573C8.75835 1.70508 11.2416 1.70508 12.9366 0.270573C13.6418 -0.326256 14.7266 0.123097 14.8033 1.04376C14.9874 3.25663 16.7434 5.01258 18.9562 5.19675C19.8769 5.27337 20.3263 6.35821 19.7294 7.0634C18.2949 8.75835 18.2949 11.2416 19.7294 12.9366C20.3263 13.6418 19.8769 14.7266 18.9562 14.8033C16.7434 14.9874 14.9874 16.7434 14.8033 18.9562C14.7266 19.8769 13.6418 20.3263 12.9366 19.7294C11.2416 18.2949 8.75835 18.2949 7.0634 19.7294C6.35821 20.3263 5.27337 19.8769 5.19675 18.9562C5.01258 16.7434 3.25663 14.9874 1.04376 14.8033C0.123097 14.7266 -0.326256 13.6418 0.270573 12.9366C1.70508 11.2416 1.70508 8.75835 0.270573 7.0634C-0.326257 6.35821 0.123097 5.27337 1.04376 5.19675C3.25663 5.01258 5.01258 3.25663 5.19675 1.04376Z"
            fill="#72C0EC"
          />
          <path
            d="M12.8728 5.95076C13.0684 5.66639 13.4576 5.5941 13.742 5.78963C14.0262 5.98516 14.0984 6.37441 13.9031 6.65877L9.31936 13.325C9.2094 13.485 9.03101 13.5857 8.83719 13.596C8.69194 13.6037 8.55063 13.5594 8.43557 13.4752L8.32937 13.3787L5.82937 10.4613L5.75735 10.3575C5.61631 10.1033 5.66844 9.77645 5.89773 9.57991C6.12707 9.38358 6.45803 9.38207 6.68753 9.56038L6.77908 9.64827L8.74929 11.9469L12.8728 5.95076Z"
            fill="black"
          />
        </svg>
      </div>

      {/* Description */}
      <p className="font-exo2 text-[14px] mb-[26px]">{description}</p>

      {/* NFT Count */}
      {leftCount && totalCount && (
        <div className="flex items-center justify-between">
          <span className={`${styles.nftText} text-[16px] font-exo2-bold`}>{nftLabel}</span>
          <span className="text-[#AFB0B0] text-[16px] font-exo2">
            Left:{' '}
            <span className="text-white">
              {leftCount} / {totalCount}
            </span>
          </span>
        </div>
      )}
    </div>
  );
};
