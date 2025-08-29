import { useMemo, useState } from 'react';
import cn from 'classnames';

import chevronIcon from '../../../assets/icons/chevron-white.svg';
import armorAvatar from '../../../assets/armor_icon.png';
import productPaintball6 from '../../../assets/product_paintball6.png';

export type ProfileCollection = {
  id: string;
  name: string;
  itemsCount: number;
  avatarSrc?: string;
  verified?: boolean;
};

export interface ProfileCollectionsDropdownProps {
  className?: string;
  collections?: ProfileCollection[];
}

export const ProfileCollectionsDropdown = ({
  className,
  collections,
}: ProfileCollectionsDropdownProps) => {
  const initialCollections = useMemo<ProfileCollection[]>(
    () =>
      collections ?? [
        {
          id: 'armor',
          name: 'Armor Collection',
          itemsCount: 2,
          avatarSrc: armorAvatar,
          verified: true,
        },
      ],
    [collections],
  );

  const [isOpen, setIsOpen] = useState(false);
  const selectedId = initialCollections[0]?.id ?? '';

  const selected = useMemo(
    () => initialCollections.find((c) => c.id === selectedId) ?? initialCollections[0],
    [initialCollections, selectedId],
  );

  const handleToggle = () => setIsOpen((v) => !v);

  // Selection is not used in the open grid view; kept state for future extension.

  return (
    <div className={cn('w-full', !isOpen && 'max-h-[40px]', className)}>
      {/* Trigger */}
      {selected && (
        <button
          type="button"
          aria-expanded={isOpen}
          onClick={handleToggle}
          className={cn(
            'w-full h-full flex items-center justify-between gap-[14px] py-[10px] px-[12px] rounded-[16px] cursor-pointer max-h-[40px]',
          )}
        >
          <div className="flex items-center gap-[16px] min-w-0">
            <img
              src={selected.avatarSrc}
              alt={selected.name}
              className="w-[40px] h-[40px] rounded-full object-cover flex-shrink-0"
            />
            <div className="flex items-center gap-[8px] min-w-0">
              <span className="text-white text-[16px] leading-[16px] truncate">
                {selected.name}
              </span>
              {selected.verified && (
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
              )}
            </div>
          </div>
          <div className="flex items-center gap-[14px] flex-shrink-0">
            <span className="text-[#AFB0B0] text-[16px] leading-[20px]">{selected.itemsCount}</span>
            <img
              src={chevronIcon}
              alt="chevron"
              className={cn(
                'w-[24px] h-[24px] transition-transform',
                isOpen ? 'rotate-90' : 'rotate-0',
              )}
            />
          </div>
        </button>
      )}

      {/* List */}
      {isOpen && (
        <div className="mt-[12px] grid grid-cols-3 gap-x-[12px] gap-y-[12px]">
          {/* Product Card from Figma 1269:11183 */}
          <button type="button" className="w-[114px] flex flex-col items-start cursor-pointer">
            <div className="w-[114px] h-[114px] rounded-[12px] overflow-hidden bg-[#B0C3D9]">
              <img
                src={productPaintball6}
                alt="The Dye Cut Pack"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="mt-[8px] text-white text-[16px] leading-[16px] font-bold truncate w-full">
              The Dye Cut Pack
            </span>
            <span className="mt-[4px] text-[#B0C3D9] text-[12px] leading-[14px] font-bold uppercase">
              UNCOMMON
            </span>
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfileCollectionsDropdown;
