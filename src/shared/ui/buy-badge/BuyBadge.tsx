import cn from 'classnames';
import tokenTon from '../../../assets/new-icons/2182ae42ec2079b7bd13864f6d10003d209d97db.svg';
import starFilled from '../../../assets/new-icons/d90a3c95508d6dbaf9dde076b697ed29646be69c.svg';
import iconBg from '../../../assets/new-icons/dab477c6ade2d19b6d463e2d6994e32669d7440c.svg';

type BadgeColor = 'yellow' | 'blue';

export interface BuyBadgeProps {
  color?: BadgeColor;
  amount: string | number;
  className?: string;
  onClick?: () => void;
}

const getPalette = (color: BadgeColor) => {
  if (color === 'blue') {
    return {
      container: 'bg-[rgba(114,192,236,0.25)]',
      text: 'text-[#72c0ec]',
      icon: tokenTon,
      iconInset: 'inset-0',
    } as const;
  }
  return {
    container: 'bg-[rgba(243,240,132,0.25)]',
    text: 'text-[#f3f084]',
    icon: starFilled,
    iconInset: 'inset-[16.667%]',
  } as const;
};

export const BuyBadge = ({ color = 'yellow', amount, className, onClick }: BuyBadgeProps) => {
  const { container, text, icon, iconInset } = getPalette(color);

  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'inline-flex items-center justify-center gap-1 px-3 py-1.5 rounded-[40px] cursor-pointer backdrop-blur-md',
        container,
        className,
      )}
    >
      <span className={cn('text-[14px] font-medium leading-none', text)}>GET FOR</span>
      <span className="relative w-6 h-6 shrink-0">
        <img src={iconBg} alt="icon-bg" className="absolute inset-0 w-full h-full" />
        <img src={icon} alt="currency" className={cn('absolute w-full h-full', iconInset)} />
      </span>
      <span className={cn('text-[14px] font-medium leading-none', text)}>{amount}</span>
    </button>
  );
};

export default BuyBadge;
