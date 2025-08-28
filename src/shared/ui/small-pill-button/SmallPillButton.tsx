import cn from 'classnames';

export type SmallPillButtonColor = 'yellow' | 'blue';

export interface SmallPillButtonProps {
  label?: string;
  color?: SmallPillButtonColor;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

const getColors = (color: SmallPillButtonColor) => {
  if (color === 'blue') {
    return { container: 'bg-[#72c0ec]', text: 'text-black' } as const;
  }
  return { container: 'bg-[#f3f084]', text: 'text-black' } as const;
};

export const SmallPillButton = ({
  label = 'GET FREE',
  color = 'yellow',
  onClick,
  className,
  disabled,
}: SmallPillButtonProps) => {
  const { container, text } = getColors(color);

  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={cn(
        'inline-flex items-center justify-center h-8 px-3 rounded-[30px] cursor-pointer',
        'transition-opacity disabled:opacity-60 disabled:cursor-not-allowed',
        container,
        text,
        'text-[14px] font-medium leading-none',
        className,
      )}
    >
      {label}
    </button>
  );
};

export default SmallPillButton;


