import tonIcon from '../../../assets/profile/token-ton.svg';

interface ReferralsProps {
  className?: string;
}

export const Referrals = ({ className = '' }: ReferralsProps) => {
  return (
    <div className={`bg-[#18191C] rounded-2xl p-6 flex items-center justify-between ${className}`}>
      {/* Левая часть */}
      <div className="flex-1 flex flex-col items-center">
        <span className="text-[32px] font-bold text-[#4ADE80] leading-none">1.5%</span>
        <span className="text-[#A1A1AA] text-center text-base mt-2">
          from friends and their
          <br />
          trading commision
        </span>
        <button className="mt-4 bg-[#2563EB] text-white text-lg font-medium rounded-full px-8 py-2 cursor-pointer focus:outline-none">
          Invite Friends
        </button>
      </div>
      {/* Вертикальная линия */}
      <div className="w-px h-[150px] bg-[#27272A] mx-6" />
      {/* Правая часть */}
      <div className="flex-1 flex flex-col items-center">
        <span className="flex items-center text-[32px] font-bold text-white leading-none">
          0.00
          <img src={tonIcon} alt="TON" className="w-6 h-6 ml-2" />
        </span>
        <span className="text-[#A1A1AA] text-center text-base mt-2">
          from friends and their
          <br />
          trading commision
        </span>
        <button
          className="mt-4 bg-[#27272A] text-[#A1A1AA] text-lg font-medium rounded-full px-8 py-2 cursor-not-allowed focus:outline-none"
          disabled
        >
          Claim
        </button>
      </div>
    </div>
  );
};
