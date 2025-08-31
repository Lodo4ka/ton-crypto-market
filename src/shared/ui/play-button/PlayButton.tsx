interface PlayButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

export const PlayButton = ({
  children,
  onClick,
  className = '',
  disabled = false,
}: PlayButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`w-full bg-[#F3F084] hover:bg-[#F3F084]/90 disabled:hover:bg-[#F3F084] disabled:bg-[#F3F084]/60 text-black font-['Russo_One'] font-normal py-4 px-6 rounded-full text-lg transition-all cursor-pointer disabled:cursor-not-allowed disabled:opacity-60 ${className}`}
    >
      {children}
    </button>
  );
};
