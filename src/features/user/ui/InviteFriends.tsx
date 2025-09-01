import ChevronIcon from '../../../assets/icons/chevron.svg';
import InviteFriendsIcon from '../../../assets/icons/invite-friends.svg';

interface InviteFriendsProps {
  className?: string;
  count?: number;
  onClick?: () => void;
}

export const InviteFriends = ({ className = '', count = 3, onClick }: InviteFriendsProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full rounded-2xl p-[8px] flex items-center gap-[8px] cursor-pointer ${className}`}
      aria-label="Invite friends"
    >
      {/* Left icon (40x40) */}
      <span className="w-[40px] h-[40px] rounded-full bg-[#27272A] flex items-center justify-center">
        <img src={InviteFriendsIcon} alt="invite friends" className="h-full w-full" />
      </span>

      {/* Center texts */}
      <div className="flex-1 flex flex-col items-start min-w-0">
        <span className="text-white text-[16px] leading-[16px] font-exo2-bold truncate">
          Invited friends
        </span>
        <span className="text-[#AFB0B0] text-[12px] leading-[14px] font-exo2">{count} friends</span>
      </div>

      {/* Right chevron */}
      <img src={ChevronIcon} alt="chevron" className="w-6 h-6" />
    </button>
  );
};
