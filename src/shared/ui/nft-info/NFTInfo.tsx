import { Share2 } from 'lucide-react';

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
  nftLabel = "NFT",
  leftCount,
  totalCount,
  className = ''
}: NFTInfoProps) => {
  return (
    <div className={`px-4 py-4 ${className}`}>
      {/* Title and Share */}
      <div className="flex items-center justify-between mb-2">
        <h1 className="text-white text-2xl font-['Russo_One'] tracking-wider">{title}</h1>
        <Share2 size={24} className="text-white cursor-pointer" />
      </div>

      {/* Collection */}
      <div className="flex items-center gap-2 mb-4">
        <span className="text-gray-300 text-base font-['Exo_2'] font-semibold">{collection}</span>
        <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
          <div className="w-2 h-2 bg-white rounded-full"></div>
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-300 text-sm leading-relaxed mb-4">{description}</p>

      {/* NFT Count */}
      {leftCount && totalCount && (
        <div className="flex items-center justify-between">
          <span className="text-white font-semibold">{nftLabel}</span>
          <span className="text-gray-300 text-sm">Left: {leftCount} / {totalCount}</span>
        </div>
      )}
    </div>
  );
};
