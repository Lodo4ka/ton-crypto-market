const IMG_MAIN = '/figma/9516226d8348cc6a97e68a11b3c9e676ab455200.png';
const ICON_VERIFIED = '/figma/1493812a7f5784cd8c9940fa58ca610dc19e0669.svg';
const ICON_MARKET = '/figma/7af774b2ae560345bc3d8a85eb59a6c829a3269a.svg';
const ICON_BOX = '/figma/75e07b39cba5575fbfae1d7906bb3fd5796647cd.svg';

import { useEffect } from 'react';
import { IconButton } from '../../shared/ui/icon-button/IconButton.tsx';
import { useAppDispatch } from '../../app/hooks.ts';
import { setPlayButtonLabel } from '../../shared/ui/play-button/playButtonSlice.ts';
import starBlack from '../../assets/icons/star-black.svg';
import shareIcon from '../../assets/icons/share-icon.svg';

export const SkinPage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(
      setPlayButtonLabel(
        <div className="flex items-center justify-center gap-2">
          <span>Get for</span>
          <img src={starBlack} alt="star" className="w-6 h-6" />
          <span>14 999</span>
        </div>,
      ),
    );
  }, [dispatch]);

  return (
    <div className="w-full text-white">
      <div className="mx-auto w-full">
        {/* Title block */}
        <div className="mt-6 flex flex-col gap-4">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <div className="text-[22px] tracking-[0.66px] font-['Russo_One'] leading-[1.2] flex">
                Extreme Power
                <img src={shareIcon} alt="share" className="ml-auto" />
              </div>
              <div className="mt-1 flex items-center gap-1">
                <div className="text-[#AFB0B0] text-[16px] font-exo2-bold leading-[16px]">
                  Top Speed: Racing Legends
                </div>
                <img src={ICON_VERIFIED} alt="verified" width={16} height={16} />
              </div>
            </div>
          </div>

          <div className="text-[14px] font-['Exo_2']">
            A limited series of cars inspired racing winners from the first half of the 20th
            century.
          </div>
        </div>

        {/* Meta row */}
        <div className="mt-4 flex items-center justify-between">
          <div className="text-[#8847FF] text-[16px] font-exo2-bold uppercase">EPIC</div>
          <div className="text-[16px] font-['Exo_2']">
            <span className="text-[#AFB0B0]">Left: </span>
            <span>287 / 2 222</span>
          </div>
        </div>

        {/* Image */}
        <div className="mt-4">
          <img
            src={IMG_MAIN}
            alt="Extreme Power"
            className="w-full rounded-[8px] aspect-square object-cover"
          />
        </div>

        {/* Actions */}
        <div className="mt-4 grid grid-cols-2 gap-2">
          <IconButton iconSrc={ICON_MARKET} iconAlt="Market" className="h-12">
            Find on Market
          </IconButton>
          <IconButton iconSrc={ICON_BOX} iconAlt="Lootbox" className="h-12">
            Get from Lootbox
          </IconButton>
        </div>
      </div>
    </div>
  );
};
