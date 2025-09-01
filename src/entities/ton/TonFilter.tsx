export const TonFilter = ({ ton, onAddTon }: { ton: number; onAddTon: () => void }) => {
  return (
    <div className="flex items-center gap-2 bg-[rgba(118,118,128,0.25)] rounded-[24px] h-9 px-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
      >
        <g clipPath="url(#clip0_1426_30492)">
          <circle cx="14" cy="14" r="14" fill="#007AFF" />
          <path
            d="M21.4852 10.922L14.7048 21.5801C14.6218 21.7092 14.5071 21.8154 14.3713 21.8888C14.2355 21.9623 14.083 22.0005 13.9281 22C13.7733 21.9995 13.6211 21.9602 13.4858 21.8859C13.3505 21.8116 13.2365 21.7046 13.1544 21.575L6.50613 10.9168C6.31953 10.6185 6.22133 10.2745 6.22267 9.92387C6.23063 9.4059 6.44669 8.91226 6.82332 8.55151C7.19996 8.19077 7.70633 7.99247 8.23106 8.00022H19.7785C20.882 7.99937 21.7782 8.85755 21.7782 9.91875C21.7782 10.2711 21.678 10.6191 21.4852 10.922ZM8.13946 10.5637L13.0853 18.0928V9.80615H8.65625C8.14464 9.80615 7.91563 10.1406 8.13946 10.5654M14.9148 18.0945L19.8623 10.5637C20.0913 10.1397 19.8571 9.80444 19.3446 9.80444H14.9165L14.9148 18.0945Z"
            fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0_1426_30492">
            <rect width="28" height="28" fill="white" />
          </clipPath>
        </defs>
      </svg>
      <div className="text-white text-[14px] w-[68px] text-center">{ton}</div>
      <button
        type="button"
        className="w-6 h-6 flex items-center justify-center rounded-md cursor-pointer"
        aria-label="Add TON"
        onClick={onAddTon}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <mask
            id="mask0_1426_30498"
            style={{ maskType: 'luminance' }}
            maskUnits="userSpaceOnUse"
            x="3"
            y="3"
            width="19"
            height="19"
          >
            <path
              d="M12.3333 20.6667C16.9358 20.6667 20.6667 16.9358 20.6667 12.3333C20.6667 7.73083 16.9358 4 12.3333 4C7.73083 4 4 7.73083 4 12.3333C4 16.9358 7.73083 20.6667 12.3333 20.6667Z"
              fill="white"
              stroke="white"
              strokeWidth="2"
              strokeLinejoin="round"
            />
            <path
              d="M12.3333 9V15.6667M9 12.3333H15.6667"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </mask>
          <g mask="url(#mask0_1426_30498)">
            <path d="M2.33203 2.33301H22.332V22.333H2.33203V2.33301Z" fill="white" />
          </g>
        </svg>
      </button>
    </div>
  );
};
