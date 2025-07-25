interface OverlayContentProps {
  icon: React.ReactNode;
  title: string;
  description?: string;
  date: string;
  balanceFrom: string;
  balanceTo: string;
  itemTitle: string;
  itemNumber: string;
  onClose: () => void;
  className?: string;
}

export const Lootbox = ({
  icon,
  title,
  description,
  date,
  balanceFrom,
  balanceTo,
  itemTitle,
  itemNumber,
  onClose,
  className = '',
}: OverlayContentProps) => {
  return (
    <div
      className={`bg-[#232323] rounded-2xl shadow-lg flex flex-col items-center px-6 pt-8 pb-4 gap-4 min-w-[320px] max-w-[90vw] relative ${className}`}
    >
      <button
        className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center rounded-full hover:bg-[#333] transition cursor-pointer text-2xl text-white"
        onClick={onClose}
        aria-label="Close"
      >
        ×
      </button>
      <div className="mb-2 flex justify-center">{icon}</div>
      <h2 className="text-3xl font-bold text-center text-white">{title}</h2>
      {description && <p className="text-gray-400 text-center text-lg">{description}</p>}
      <div className="w-full flex flex-col gap-4 mt-2">
        <div className="flex items-center gap-3">
          <div className="bg-[#313131] rounded-xl p-2 flex items-center justify-center">
            {/* calendar icon */}
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
              <rect width="24" height="24" rx="6" fill="#232323" />
              <path
                d="M7 2v2M17 2v2M3 7h18M5 7v12a2 2 0 002 2h10a2 2 0 002-2V7M5 7V5a2 2 0 012-2h10a2 2 0 012 2v2"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div>
            <div className="text-gray-400 text-sm">Date and Time</div>
            <div className="text-white text-base font-medium">{date}</div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="bg-[#313131] rounded-xl p-2 flex items-center justify-center">
            {/* star icon */}
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
              <rect width="24" height="24" rx="6" fill="#232323" />
              <path
                d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                fill="#FFD600"
              />
            </svg>
          </div>
          <div>
            <div className="text-gray-400 text-sm">Balance</div>
            <div className="flex items-center gap-2 text-white text-base font-medium">
              <span>{balanceFrom}</span>
              <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
                <path
                  d="M6 4l4 4-4 4"
                  stroke="#fff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>{balanceTo}</span>
              <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
                <path
                  d="M10 15.273l6.18 3.727-1.64-7.03L22 9.24l-7.19-.61L10 2 7.19 8.63 0 9.24l5.46 4.73L3.82 19z"
                  fill="#FFD600"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="bg-[#313131] rounded-xl p-2 flex items-center justify-center">
            {/* item icon */}
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
              <rect width="24" height="24" rx="6" fill="#232323" />
              <path
                d="M4 7a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H6a2 2 0 01-2-2V7z"
                stroke="#fff"
                strokeWidth="2"
              />
              <path d="M8 11h8M8 15h8" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
          <div>
            <div className="text-gray-400 text-sm">Item title</div>
            <div className="text-white text-base font-medium">
              {itemTitle} ・ <span className="text-gray-400">#{itemNumber}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-1 mt-6 rounded-full bg-gray-700" />
    </div>
  );
};
