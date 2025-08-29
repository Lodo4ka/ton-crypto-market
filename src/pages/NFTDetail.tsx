import { NavigationBar } from '../shared/ui/navigation-bar/NavigationBar.tsx';
import { NFTInfo } from '../shared/ui/nft-info/NFTInfo.tsx';
import { NFTImage } from '../shared/ui/nft-image/NFTImage.tsx';
import { NFTProperties } from '../shared/ui/nft-properties/NFTProperties.tsx';
import { ActionButtons } from '../shared/ui/action-buttons/ActionButtons.tsx';

// Mock data
const NFT_DATA = {
  title: "Extreme Power",
  collection: "Top Speed: Racing Legends",
  description: "A limited series of cars inspired racing winners from the first half of the 20th century.",
  image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&h=800&fit=crop&crop=center",
  leftCount: "382",
  totalCount: "888",
};

const NFT_PROPERTIES = [
  { label: "Collection", value: "Season 0 Collection" },
  { label: "Rarity", value: "LEGENDARY", highlighted: true },
  { label: "Type", value: "Assets 0" },
];

export const NFTDetail = () => {
  const handleBack = () => {
    console.log('Back button clicked');
    // Add navigation logic here
  };

  const handleFindOnMarket = () => {
    console.log('Find on Market clicked');
  };

  const handleGetFromLootbox = () => {
    console.log('Get from Lootbox clicked');
  };

  return (
    <div className="min-h-screen bg-[var(--tg-bg-black)] text-white flex flex-col">
      {/* Navigation */}
      <NavigationBar onBack={handleBack} />

      {/* Content */}
      <div className="flex-1 overflow-auto">
        {/* NFT Info */}
        <NFTInfo
          title={NFT_DATA.title}
          collection={NFT_DATA.collection}
          description={NFT_DATA.description}
          leftCount={NFT_DATA.leftCount}
          totalCount={NFT_DATA.totalCount}
          className="mb-4"
        />

        {/* NFT Image */}
        <NFTImage
          src={NFT_DATA.image}
          alt={NFT_DATA.title}
          className="mb-6"
        />

        {/* Properties */}
        <NFTProperties
          properties={NFT_PROPERTIES}
          className="mb-6"
        />
      </div>

      {/* Action Buttons */}
      <ActionButtons
        onFindOnMarket={handleFindOnMarket}
        onGetFromLootbox={handleGetFromLootbox}
      />
    </div>
  );
};
