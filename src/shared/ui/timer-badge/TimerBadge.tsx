import cn from 'classnames';
import iconBg from '../../../assets/new-icons/dab477c6ade2d19b6d463e2d6994e32669d7440c.svg';
import tokenTon from '../../../assets/new-icons/2182ae42ec2079b7bd13864f6d10003d209d97db.svg';

export interface TimerBadgeProps {
  text: string;
  className?: string;
}

export const TimerBadge = ({ text, className }: TimerBadgeProps) => {
  return (
    <div
      className={cn(
        'inline-flex items-center justify-center gap-1 px-3 py-1.5 rounded-[40px] backdrop-blur-md',
        'bg-[rgba(114,192,236,0.25)]',
        className,
      )}
    >
      <span className={cn('text-[14px] font-medium leading-none', 'text-[#72c0ec]')}> </span>
      <span className="relative w-6 h-6 shrink-0">
        <img src={iconBg} alt="icon-bg" className="absolute inset-0 w-full h-full" />
        <img src={tokenTon} alt="currency" className={cn('absolute w-full h-full', 'inset-0')} />
      </span>
      <span className={cn('text-[14px] font-medium leading-none', 'text-[#72c0ec]')}>{text}</span>
    </div>
  );
};

export default TimerBadge;


