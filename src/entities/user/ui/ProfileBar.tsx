import imgAvatar from '../../../assets/profile/avatar.png';
import biLightningFill from '../../../assets/profile/bi-lightning-fill.svg';
import tokenTon from '../../../assets/profile/token-ton.svg';
import tokenTon1 from '../../../assets/profile/token_ton.svg';
import tokenTon2 from '../../../assets/profile/token_ton_2.svg';
import group from '../../../assets/profile/group.svg';

export const ProfileBar = () => {
  return (
    <div className="flex flex-col items-center w-full  gap-4 relative">
      <img
        src={imgAvatar}
        alt="avatar"
        className="rounded-full w-[104px] h-[104px] object-cover absolute left-1/2 -translate-x-1/2 -top-[5px]"
      />
      <div className="grid grid-cols-2 grid-rows-2 gap-0.5 w-full">
        <div className="bg-white/10 rounded-tl-[12px] flex flex-col justify-center pl-2 py-2 max-h-[47px]">
          <span className="text-xs text-white/40">Points Earned</span>
          <div className="flex items-center gap-1 mt-1">
            <img src={biLightningFill} alt="Lightning" className="w-4 h-4" />
            <span className="text-base text-white font-semibold">200</span>
          </div>
        </div>
        {/* TON Balance */}
        <div className="bg-white/10 rounded-tr-[12px] flex flex-row items-center pl-16 pr-2 py-2 gap-2 max-h-[47px]">
          <img src={tokenTon1} alt="TON" className="w-7 h-7" />
          <span className="text-sm text-white font-semibold">0</span>
          <div className="relative w-6 h-6 ml-auto cursor-pointer">
            <img src={group} alt="Add" className="absolute inset-0 w-full h-full" />
          </div>
        </div>
        {/* Total Volume */}
        <div className="bg-white/10 rounded-bl-[12px] flex flex-col justify-center pl-2 py-2 max-h-[47px]">
          <span className="text-xs text-white/40">Total volume</span>
          <div className="flex items-center gap-1 mt-1">
            <span className="text-base text-white font-semibold">0.00</span>
            <img src={tokenTon} alt="TON" className="w-4 h-4" />
          </div>
        </div>
        {/* TON Balance 1 */}
        <div className="bg-white/10 rounded-br-[12px] flex flex-row items-center pl-16 pr-2 py-2 gap-2 max-h-[47px]">
          <img src={tokenTon2} alt="TON" className="w-7 h-7" />
          <span className="text-sm text-white font-semibold">0.00</span>
          <div className="relative w-6 h-6 ml-auto cursor-pointer">
            <img src={group} alt="Add" className="absolute inset-0 w-full h-full" />
          </div>
        </div>
      </div>
    </div>
  );
};
