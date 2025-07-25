import React from "react";
import ChevronIcon from "../../../assets/icons/chevron.svg";
import RefreshIcon from "../../../assets/icons/update.svg";
import PlusIcon from "../../../assets/icons/plus.svg";
import LootboxImage from "../../../assets/lootbox.png";

interface HistoryTableProps {
  className?: string;
}

const history = [
  {
    icon: LootboxImage,
    title: "Buying a Loot box",
    time: "17:03",
    amount: "-14 999 Stars",
    amountClass: "text-white",
  },
  {
    icon: RefreshIcon,
    title: "Conversion",
    time: "17:03",
    amount: "+358 Stars",
    amountClass: "text-white",
  },
  {
    icon: PlusIcon,
    title: "Deposit",
    time: "17:03",
    amount: "+8.50 TON",
    amountClass: "text-[#49DF64] font-semibold",
  },
];

export const HistoryTable: React.FC<HistoryTableProps> = ({ className }) => {
  return (
    <div className={`flex flex-col gap-3 w-full ${className || ""}`}>
      {history.map((item, idx) => (
        <div
          key={idx}
          className="flex items-center justify-between bg-white/5 rounded-lg px-4 py-3"
        >
          {/* Icon */}
          <div className={`flex items-center justify-center rounded-lg ${item.iconBg}`}>
            {typeof item.icon === "string" ? (
              <img src={item.icon} alt="icon" className="object-cover" />
            ) : (
              item.icon
            )}
          </div>
          {/* Title & Time */}
          <div className="flex flex-col flex-1 min-w-0 ml-3">
            <span className="text-white text-base leading-tight truncate">{item.title}</span>
            <span className="text-xs text-white/40 leading-tight">{item.time}</span>
          </div>
          {/* Amount */}
          <span className={`ml-3 text-sm text-right ${item.amountClass}`}>{item.amount}</span>
          {/* Chevron */}
          <button className="ml-3 p-1 cursor-pointer">
            <img src={ChevronIcon} alt="chevron" className="w-6 h-6 opacity-40" />
          </button>
        </div>
      ))}
    </div>
  );
};
