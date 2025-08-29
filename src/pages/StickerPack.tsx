import { NFTInfo } from '../shared/ui/nft-info/NFTInfo';

export const StickerPack = () => {
  return (
    <div className="min-h-screen bg-[var(--tg-bg-black)] text-white">
      <div className="pt-6">
        <NFTInfo
          title="The Dye Cut Pack"
          collection="Armor Collection"
          description="Limited edition Sticker Pack collection inspired by classic 16-bit gaming."
          className=""
        />
      </div>
    </div>
  );
};
