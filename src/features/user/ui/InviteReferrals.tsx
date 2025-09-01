import React from 'react';
import lightning from '../../../assets/icons/bi_lightning-fill.svg';
import percent from '../../../assets/icons/mdi_percent-box.svg';
import cashback from '../../../assets/icons/streamline-plump_wallet-solid.svg';
import { SmallPillFillButton } from '../../../shared/ui/small-pill-fill-button/SmallPillButton.tsx';
import { InviteFriends } from './InviteFriends.tsx';

interface InviteReferralsProps {
  className?: string;
}

export const InviteReferrals: React.FC<InviteReferralsProps> = ({ className = '' }) => {
  return (
    <div className={className}>
      <InviteFriends className="mb-[24px]" />
      <div className="text-[#A1A1AA] text-base text-[12px] font-exo2-bold mb-3 uppercase tracking-wide">
        INVITE FRIENDS AND EARN TON & POINTS
      </div>
      <div className="bg-[#18191C] rounded-2xl p-6 mb-6">
        {/* Referral commissions */}
        <div className="flex items-start mb-5">
          <span className="text-[#38BDF8] text-[16px] mr-3 w-[30px] h-[24px]">
            <img src={percent} alt="percent" className="h-full w-full" />
          </span>
          <div>
            <div className="text-[#38BDF8] text-[16px] font-exo2-bold leading-tight">
              Referral commissions
            </div>
            <div className="text-[#AFB0B0] text-[14px] font-exo2 leading-tight">
              Earn from 20% to 50% in TON from their trading commission
            </div>
          </div>
        </div>
        {/* 10% season points */}
        <div className="flex items-start mb-5">
          <span className="text-[#4ADE80] text-[16px] mr-3 w-[30px] h-[24px]">
            <img src={lightning} alt="lightning" />
          </span>
          <div>
            <div className="text-[#4ADE80] text-[16px] font-exo2-bold leading-tight">
              10% season points
            </div>
            <div className="text-[#A1A1AA] text-[14px] font-exo2 leading-tight">
              From the points earned by your referrals
            </div>
          </div>
        </div>
        {/* Cashback */}
        <div className="flex items-start">
          <span className="text-[#FACC15] text-[16px] mr-3 w-[30px] h-[24px]">
            <img src={cashback} alt="cashback" />
          </span>
          <div>
            <div className="text-[#FACC15] text-[16px] font-exo2-bold leading-tight">
              Cashback - earn money from purchases
            </div>
            <div className="text-[#A1A1AA] text-[14px] font-exo2 leading-tight">
              Increasing with your purchases volume
            </div>
          </div>
        </div>
      </div>
      <SmallPillFillButton
        className="w-full h-[50px] text-[16px]"
        color="yellow"
        label="Invite Friends"
      />
    </div>
  );
};
