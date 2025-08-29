import { BtnPill } from '../pill-btn/BtnMain.tsx';
import React from 'react';

export type SmallPillButtonColor = 'yellow' | 'blue' | 'yellow-blur' | 'blue-blur';

export interface SmallPillButtonProps {
  label?: string | React.ReactNode;
  color?: SmallPillButtonColor;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

const getColors = (color: SmallPillButtonColor) => {
  if (color === 'blue') {
    return { container: 'bg-[#72c0ec]', text: 'text-black' } as const;
  }
  if (color === 'yellow-blur') {
    return { container: 'bg-[rgba(243,240,132,0.25)]', text: 'text-[#f3f084]' } as const;
  }
  if (color === 'blue-blur') {
    return { container: 'bg-[rgba(114,192,236,0.25)]', text: 'text-[#72c0ec]' } as const;
  }
  return { container: 'bg-[#f3f084]', text: 'text-black' } as const;
};

export const BigPillFillButton = ({
  label = 'GET FREE',
  color = 'yellow',
  onClick,
  className,
  disabled,
}: SmallPillButtonProps) => {
  const { container, text } = getColors(color);

  return (
    <BtnPill
      container={container}
      text={text}
      label={label}
      onClick={onClick}
      className={`text-[16px] w-full py-[16px] font-medium leading-none ${className}`}
      disabled={disabled}
    />
  );
};

export default BigPillFillButton;
