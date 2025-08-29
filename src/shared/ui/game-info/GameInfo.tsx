interface GameInfoProps {
  icon: string;
  title: string;
  players: string;
  description: string;
  className?: string;
}

export const GameInfo = ({ icon, title, players, description, className = '' }: GameInfoProps) => {
  return (
    <div className={`${className}`}>
      {/* Game header with icon and title */}
      <div className="flex items-center gap-4 mb-4">
        <img src={icon} alt={title} className="w-12 h-12 rounded-lg object-cover" />
        <div className="flex-1">
          <h1 className="text-white text-xl font-semibold">{title}</h1>
          <p className="text-gray-400 text-sm">{players}</p>
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-300 text-sm leading-relaxed mb-6">{description}</p>
    </div>
  );
};
