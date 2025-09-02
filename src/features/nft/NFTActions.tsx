export const NFTActions = () => {
  return (
    <div className="flex gap-2">
      <button className="py-[16px] bg-[#FFFFFF1A] gap-[8px] flex-1 rounded-[32px] text-center">
        <div className="flex items-center gap-[8px] justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="20"
            viewBox="0 0 21 20"
            fill="none"
          >
            <path
              d="M10.5 0C4.98 0 0.5 4.48 0.5 10C0.5 15.52 4.98 20 10.5 20C16.02 20 20.5 15.52 20.5 10C20.5 4.48 16.02 0 10.5 0ZM8.5 14.5V5.5L14.5 10L8.5 14.5Z"
              fill="white"
            />
          </svg>
          <span className="text-[14px] font-russo">Unlock and play</span>
        </div>
      </button>
      <button className="py-[16px] bg-[rgba(255, 255, 255, 0.10)] bg-[#F3F084] rounded-[32px] flex-1">
        <div className="flex items-center gap-[8px] justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="20"
            viewBox="0 0 21 20"
            fill="none"
          >
            <path
              d="M16.332 5.83203H4.66536C4.44435 5.83203 4.23239 5.91983 4.07611 6.07611C3.91983 6.23239 3.83203 6.44435 3.83203 6.66536V17.4987C3.83203 17.7197 3.91983 17.9317 4.07611 18.088C4.23239 18.2442 4.44435 18.332 4.66536 18.332H16.332C16.553 18.332 16.765 18.2442 16.9213 18.088C17.0776 17.9317 17.1654 17.7197 17.1654 17.4987V6.66536C17.1654 6.44435 17.0776 6.23239 16.9213 6.07611C16.765 5.91983 16.553 5.83203 16.332 5.83203Z"
              fill="black"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7.58203 7.49935V4.58268C7.58203 4.19966 7.65747 3.82039 7.80405 3.46652C7.95063 3.11266 8.16547 2.79113 8.4363 2.52029C8.70714 2.24945 9.02867 2.03461 9.38254 1.88803C9.7364 1.74146 10.1157 1.66602 10.4987 1.66602C10.8817 1.66602 11.261 1.74146 11.6149 1.88803C11.9687 2.03461 12.2903 2.24945 12.5611 2.52029C12.8319 2.79113 13.0468 3.11266 13.1933 3.46652C13.3399 3.82039 13.4154 4.19966 13.4154 4.58268V7.49935"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-[14px] font-russo text-black">Sell on Market</span>
        </div>
      </button>
    </div>
  );
};
