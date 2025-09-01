import { useTonConnectUI, useTonWallet } from '@tonconnect/ui-react';

export const TonWallet = ({ className }: { className?: string }) => {
  const [tonConnectUI] = useTonConnectUI();
  const wallet = useTonWallet();

  const isConnected = Boolean(wallet?.account?.address);

  const handleClick = () => {
    tonConnectUI.openModal();
  };

  return (
    <div
      className={`bg-[#F3F084] text-black text-[14px] font-russo rounded-full px-[16px] py-[8px] w-[170px] ${className ?? ''}`}
    >
      <button className="flex items-center justify-center" onClick={handleClick}>
        <div className="flex items-center justify-center gap-2  whitespace-nowrap">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="20"
            viewBox="0 0 21 20"
            fill="none"
          >
            <path
              d="M16.9143 6.60195L11.1024 15.4837C11.0313 15.5913 10.933 15.6798 10.8166 15.741C10.7001 15.8022 10.5695 15.8341 10.4367 15.8337C10.304 15.8332 10.1736 15.8005 10.0576 15.7386C9.94159 15.6766 9.84386 15.5875 9.77352 15.4795L4.07501 6.59769C3.91506 6.34906 3.8309 6.06241 3.83204 5.77022C3.83887 5.33858 4.02406 4.92721 4.34689 4.62659C4.66972 4.32597 5.10375 4.16072 5.55352 4.16717H15.4513C16.3972 4.16646 17.1654 4.88161 17.1654 5.76595C17.1654 6.05955 17.0794 6.34959 16.9143 6.60195ZM5.475 6.30338L9.71426 12.5777V5.67212H5.91797C5.47945 5.67212 5.28315 5.95078 5.475 6.3048M11.2824 12.5791L15.5231 6.30338C15.7194 5.95007 15.5187 5.6707 15.0794 5.6707H11.2839L11.2824 12.5791Z"
              fill="black"
            />
          </svg>{' '}
          Connect Wallet
        </div>
      </button>
    </div>
  );
};
