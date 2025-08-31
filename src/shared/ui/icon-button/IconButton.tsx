import React from 'react';

interface IconButtonProps {
  children?: React.ReactNode;
  iconSrc: string;
  iconAlt: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

export const IconButton = ({
  children,
  iconSrc,
  iconAlt,
  onClick,
  className = '',
  disabled = false,
}: IconButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`cursor-pointer flex items-center justify-center gap-2 rounded-[8px] bg-[rgba(255,255,255,0.1)] px-4 py-3 transition-colors hover:bg-[rgba(255,255,255,0.16)] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:bg-[rgba(255,255,255,0.1)] ${className}`}
    >
      <span className="inline-flex h-5 w-5 items-center justify-center">
        <img src={iconSrc} alt={iconAlt} className="h-5 w-5" />
      </span>
      <span className="text-[14px] font-semibold">{children}</span>
    </button>
  );
};
