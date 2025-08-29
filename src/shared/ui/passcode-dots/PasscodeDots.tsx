import cn from 'classnames';
import dotEmpty from '../../../assets/new-icons/90a8a29abe782e03b1aba6a7aa5d067d04f0b414.svg';
import dotFilled from '../../../assets/new-icons/687a0c8e733a2bec351cfe7d7362a7051f672b45.svg';

export interface PasscodeDotsProps {
  length?: 4 | 6;
  filled?: number; // сколько заполнено
  className?: string;
}

export const PasscodeDots = ({ length = 4, filled = 0, className }: PasscodeDotsProps) => {
  return (
    <div className={cn('flex gap-4 p-3', className)}>
      {Array.from({ length }).map((_, i) => (
        <img key={i} src={i < filled ? dotFilled : dotEmpty} alt="dot" className="w-4 h-4" />
      ))}
    </div>
  );
};

export default PasscodeDots;
