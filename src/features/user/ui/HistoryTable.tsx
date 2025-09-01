import React from 'react';
import ChevronIcon from '../../../assets/icons/chevron.svg';
import RefreshIcon from '../../../assets/icons/update.svg';
import PlusIcon from '../../../assets/icons/plus.svg';
import LootboxImage from '../../../assets/lootbox.png';
import { useDispatch } from 'react-redux';
import { openLootbox } from '../../../entities/lootbox/lib/visibilityLootboxSlice';

interface HistoryItem {
  icon: string | React.ReactNode;
  title: string;
  time: string;
  amount: string;
  amountClass: string;
}

interface HistoryTableProps {
  className?: string;
}

const history: HistoryItem[] = [
  {
    icon: LootboxImage,
    title: 'Buying a Loot box',
    time: '17:03',
    amount: '-14 999 Stars',
    amountClass: 'text-white',
  },
  {
    icon: RefreshIcon,
    title: 'Conversion',
    time: '17:03',
    amount: '+358 Stars',
    amountClass: 'text-white',
  },
  {
    icon: PlusIcon,
    title: 'Deposit',
    time: '17:03',
    amount: '+8.50 TON',
    amountClass: 'text-[#49DF64] font-semibold',
  },
];

export const HistoryTable: React.FC<HistoryTableProps> = ({ className }) => {
  const dispatch = useDispatch();

  const handleClickOpenLootbox = (item: HistoryItem) => {
    dispatch(
      openLootbox({
        icon: item.icon,
        title: '-14 999 Stars',
        description: 'Buying a Loot box',
        date: 'June 25, 2025 at 17:04',
        balanceFrom: '16 500',
        balanceTo: '1 501',
        itemTitle: 'Racer Box',
        itemNumber: '425,',
      }),
    );
  };

  return (
    <div className={`flex flex-col gap-3 w-full ${className || ''}`}>
      {history.map((item, idx) => (
        <div
          key={idx}
          className="flex items-center justify-between border-b border-white/10 rounded-lg px-4 py-3"
          onClick={() => {
            if (idx === 0) {
              handleClickOpenLootbox(item);
            }
          }}
          style={idx === 0 ? { cursor: 'pointer' } : {}}
        >
          <div className={`flex items-center justify-center rounded-lg bg-white/5`}>
            {typeof item.icon === 'string' ? (
              <img src={item.icon} alt="icon" className="object-cover" />
            ) : (
              item.icon
            )}
          </div>
          <div className="flex flex-col flex-1 min-w-0 ml-3">
            <span className="text-white text-base leading-tight truncate">{item.title}</span>
            <span className="text-xs text-white/40 leading-tight">{item.time}</span>
          </div>
          <span className={`ml-3 text-sm text-right font-exo2 ${item.amountClass}`}>
            {item.amount}
          </span>
          <button className="ml-3 p-1 cursor-pointer">
            <img src={ChevronIcon} alt="chevron" className="w-6 h-6 opacity-40" />
          </button>
        </div>
      ))}
    </div>
  );
};
