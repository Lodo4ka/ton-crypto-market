import cn from 'classnames';

type BadgeType = 'yellow' | 'blue' | 'gray';

export interface BadgeProps {
  type?: BadgeType;
  children: string;
  className?: string;
}

const typeToClasses: Record<BadgeType, { container: string; text: string }> = {
  yellow: { container: 'bg-[#f3f084]', text: 'text-black' },
  blue: { container: 'bg-[#72c0ec]', text: 'text-black' },
  gray: { container: 'backdrop-blur-[13px] bg-black/10', text: 'text-white' },
};

export const Badge = ({ type = 'yellow', children, className }: BadgeProps) => {
  const { container, text } = typeToClasses[type];
  return (
    <span
      className={cn(
        'inline-flex items-center justify-center rounded-[12px] px-1 py-0.5 text-[12px] leading-[14px]',
        container,
        text,
        className,
      )}
    >
      {children}
    </span>
  );
};

export default Badge;


