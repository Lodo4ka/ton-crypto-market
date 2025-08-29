import cn from 'classnames';

export interface BtnPillProps {
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
  container?: string;
  text?: string;
  label?: string;
}

export const BtnPill = ({ disabled, onClick, className, container, text, label }: BtnPillProps) => {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={cn(
        'inline-flex items-center justify-center h-8 px-3 rounded-[30px] cursor-pointer',
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
