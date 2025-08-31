import { StickerTitle } from '../entities/sticker/StickerTitle';
import { CollectionCard } from '../shared/ui/collection-card/CollectionCard';

// Figma assets
const pixelatedStormImg = '/figma/ede1def55d46cad8d65307881a6520f21129b1df.png';
const topSpeedImg1 = '/figma/867479926bbbaadc6e682a53eb63070a09825ade.png';
const boxingImg1 = '/figma/b3626f1346fc6dc7c6f5970d72064f4bd66f28e1.png';
const collectionsIcon = '/figma/c603b96d7db051eb74f798ab129dddac597f6aac.svg';

type Collection = {
  id: string;
  title: string;
  author: string;
  image: string;
  verified: boolean;
};

const MOCK_COLLECTIONS: Collection[] = [
  {
    id: '1',
    title: 'Pixelated Storm',
    author: 'Fortnite Clix',
    image: pixelatedStormImg,
    verified: true,
  },
  {
    id: '2',
    title: 'Top Speed: Racing Legends',
    author: 'Top Speed Game',
    image: topSpeedImg1,
    verified: true,
  },
  {
    id: '3',
    title: 'Boxing. Ring Warriors',
    author: 'Boxing Game',
    image: boxingImg1,
    verified: true,
  },
];

export const StickerTab = () => {
  return (
    <>
      {/* Header with Collections title and icon */}
      <div className="flex items-center justify-between">
        <StickerTitle stickerIcon={collectionsIcon} title="Collections" />
      </div>

      <div className="flex flex-wrap gap-2 items-start justify-start">
        {MOCK_COLLECTIONS.map((collection) => (
          <CollectionCard
            key={collection.id}
            title={collection.title}
            author={collection.author}
            image={collection.image}
            verified={collection.verified}
          />
        ))}
      </div>
    </>
  );
};
