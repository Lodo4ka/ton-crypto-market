import React from 'react';
import lightning from '../../../assets/icons/bi_lightning-fill.svg';
import percent from '../../../assets/icons/mdi_percent-box.svg';
import cashback from '../../../assets/icons/streamline-plump_wallet-solid.svg';

interface InviteReferralsProps {
  className?: string;
}

export const InviteReferrals: React.FC<InviteReferralsProps> = ({ className = '' }) => {
  return (
    <div className={className}>
      <div className="text-[#A1A1AA] text-base font-medium mb-3 uppercase tracking-wide">
        INVITE FRIENDS AND EARN TON & POINTS
      </div>
      <div className="bg-[#18191C] rounded-2xl p-6 mb-6">
        {/* Referral commissions */}
        <div className="flex items-start mb-5">
          <span className="text-[#38BDF8] text-2xl mr-3 mt-1">
            <img src={percent} alt="lightning" />
          </span>
          <div>
            <div className="text-[#38BDF8] text-lg font-bold leading-tight">
              Referral commissions
            </div>
            <div className="text-[#A1A1AA] text-base leading-tight">
              Earn from 20% to 50% in TON from their trading commission
            </div>
          </div>
        </div>
        {/* 10% season points */}
        <div className="flex items-start mb-5">
          <span className="text-[#4ADE80] text-2xl mr-3 mt-1">
            <img src={lightning} alt="lightning" />
          </span>
          <div>
            <div className="text-[#4ADE80] text-lg font-bold leading-tight">10% season points</div>
            <div className="text-[#A1A1AA] text-base leading-tight">
              From the points earned by your referrals
            </div>
          </div>
        </div>
        {/* Cashback */}
        <div className="flex items-start">
          <span className="text-[#FACC15] text-2xl mr-3 mt-1">
            <img src={cashback} alt="cashback" />
          </span>
          <div>
            <div className="text-[#FACC15] text-lg font-bold leading-tight">
              Cashback - earn money from purchases
            </div>
            <div className="text-[#A1A1AA] text-base leading-tight">
              Increasing with your purchases volume
            </div>
          </div>
        </div>
      </div>
      <button className="w-full bg-[#2563EB] text-white text-lg font-medium rounded-2xl py-3 cursor-pointer focus:outline-none">
        Invite Friends
      </button>
    </div>
  );
};
