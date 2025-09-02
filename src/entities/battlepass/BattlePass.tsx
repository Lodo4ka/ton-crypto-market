import cn from 'classnames';

interface BattlePassProps {
  className?: string;
}

export const BattlePass = ({ className = '' }: BattlePassProps) => {
  return (
    <div
      className={cn(
        'w-full rounded-[12px] bg-white/10 px-4 py-4',
        'flex items-center justify-center h-[125px]',
        className,
      )}
      style={{
        backgroundImage: "url('/figma/battlepass_bg_base.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div
        className="w-full h-[60px] flex items-center justify-center"
        style={{
          backgroundImage:
            'linear-gradient(91deg, rgba(255, 255, 255, 0) 0.01%, rgba(80, 80, 80, 0.41) 105.97%), linear-gradient(269deg, rgba(255, 255, 255, 0) 0.01%, rgba(80, 80, 80, 0.41) 105.97%)',
          backgroundSize: '50% 100%, 50% 100%',
          backgroundPosition: 'left, right',
          backgroundRepeat: 'no-repeat, no-repeat',
        }}
      >
        <h3 className="text-[#F3F084] text-[22px] leading-[1.2] tracking-wide font-russo">
          Battle Pass
        </h3>
      </div>
    </div>
  );
};
