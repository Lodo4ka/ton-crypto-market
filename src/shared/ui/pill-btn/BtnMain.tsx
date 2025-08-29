import cn from 'classnames';
import React from 'react';

export interface BtnPillProps {
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
  container?: string;
  text?: string;
  label?: string | React.ReactNode;
}

export const BtnPill = ({ disabled, onClick, className, container, text, label }: BtnPillProps) => {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={cn(
        'inline-flex items-center justify-center px-3 rounded-[30px] cursor-pointer',
        'transition-opacity disabled:opacity-60 disabled:cursor-not-allowed font-russo',
        container,
        text,
        className,
      )}
    >
      {label}
    </button>
  );
};
