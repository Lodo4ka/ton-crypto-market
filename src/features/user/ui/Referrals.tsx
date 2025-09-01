import tonIcon from '../../../assets/profile/token-ton.svg';
import { SmallPillFillButton } from '../../../shared/ui/small-pill-fill-button/SmallPillButton.tsx';

interface ReferralsProps {
  className?: string;
}

export const Referrals = ({ className = '' }: ReferralsProps) => {
  return (
    <div
      className={`bg-[#18191C] rounded-2xl p-[16px] flex items-center justify-between max-h-[140px] ${className}`}
    >
      {/* Левая часть */}
      <div className="flex-1 flex flex-col items-center">
        <span className="text-[20px] font-russo font-bold text-[#72C0EC] leading-none">1.5%</span>
        <span className="text-[#A1A1AA] text-center text-[12px] font-exo2 mt-[8px] mb-[16px]">
          from friends and their
          <br />
          trading commision
        </span>
        <SmallPillFillButton color="yellow" label="Invite Friends" />
      </div>
      {/* Вертикальная линия */}
      <div className="w-px h-[110px] bg-[#27272A] mx-6" />
      {/* Правая часть */}
      <div className="flex-1 flex flex-col items-center">
        <span className="flex items-center text-[20px] font-bold text-white leading-none font-russo">
          0.00
          <img src={tonIcon} alt="TON" className="w-[20px] h-[20px] ml-2" />
        </span>
        <span className="text-[#AFB0B0] text-center text-base text-[12px] font-exo2 mt-[8px] mb-[16px]">
          from friends and their
          <br />
          trading commision
        </span>
        <SmallPillFillButton color="gray" label="Claim" disabled />
      </div>
    </div>
  );
};
