interface PlayButtonProps {
  onClick?: () => void;
  className?: string;
}

export const PlayButton = ({ onClick, className = '' }: PlayButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`w-full bg-[#F5D60A] hover:bg-[#F5D60A]/90 text-black font-bold py-4 px-6 rounded-full text-lg transition-all cursor-pointer ${className}`}
    >
      PLAY
    </button>
  );
};
