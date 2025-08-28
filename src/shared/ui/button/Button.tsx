import cn from 'classnames';
import vectorBg from '../../../assets/dab477c6ade2d19b6d463e2d6994e32669d7440c.svg';
import starWhite from '../../../assets/0f9436e26d8e30cf01eacd4d67d87cde59104b6f.svg';
import starBlack from '../../../assets/1f197e1ec5b1d7ecd934de693b00f2960a88357f.svg';

type ButtonVariant = 'regular' | 'secondary';
type ButtonColor = 'yellow' | 'blue' | 'gray';

export interface ButtonProps {
  leftText?: string;
  rightText?: string;
  icons?: boolean;
  variant?: ButtonVariant;
  color?: ButtonColor;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const getColors = (variant: ButtonVariant, color: ButtonColor) => {
  // Цвета из фигмы
  if (variant === 'regular' && color === 'yellow') {
    return { container: 'bg-[#f3f084]', text: 'text-black' };
  }
  if (variant === 'secondary' && color === 'yellow') {
    return { container: 'bg-[#fdfde1]', text: 'text-black' };
  }
  if (variant === 'regular' && color === 'blue') {
    return { container: 'bg-[#72c0ec]', text: 'text-black' };
  }
  if (variant === 'secondary' && color === 'blue') {
    return { container: 'bg-[#d6ebf8]', text: 'text-black' };
  }
  // gray (используется один вариант как в дизайне)
  return { container: 'bg-[#5e5e5e]', text: 'text-[#afb0b0]' };
};

export const Button = ({
  leftText = 'Play',
  rightText = 'Play',
  icons = true,
  variant = 'regular',
  color = 'yellow',
  className,
  onClick,
  type = 'button',
  disabled = false,
}: ButtonProps) => {
  const { container, text } = getColors(variant, color);
  const starIcon = color === 'gray' ? starWhite : starBlack;

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={cn(
        'inline-flex items-center justify-center gap-1 px-6 h-12 rounded-[32px] cursor-pointer',
        'transition-opacity disabled:opacity-60 disabled:cursor-not-allowed',
        container,
        className,
      )}
    >
      <span className={cn('text-[16px] font-medium leading-none', text)}>{leftText}</span>
      {icons && (
        <span className="relative w-6 h-6 shrink-0">
          <img src={vectorBg} alt="icon-bg" className="absolute inset-0 w-full h-full" />
          <img
            src={starIcon}
            alt="star"
            className="absolute inset-[16.667%] w-[66.666%] h-[66.666%]"
          />
        </span>
      )}
      <span className={cn('text-[16px] font-medium leading-none', text)}>{rightText}</span>
    </button>
  );
};

export default Button;
