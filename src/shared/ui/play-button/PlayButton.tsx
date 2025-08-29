interface PlayButtonProps {
  text?: string;
  onClick?: () => void;
  className?: string;
}

export const PlayButton = ({ text = 'PLAY', onClick, className = '' }: PlayButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`w-full bg-[#F3F084] hover:bg-[#F3F084]/90 text-black font-['Russo_One'] font-normal py-4 px-6 rounded-full text-lg transition-all cursor-pointer ${className}`}
    >
      {text}
    </button>
  );
};
