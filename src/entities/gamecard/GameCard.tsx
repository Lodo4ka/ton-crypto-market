interface GameCardProps {
  id: string;
  title: string;
  avatar: string;
  players: string;
  banner: string;
  onClick: () => void;
}

export const GameCard = ({ id, title, avatar, players, banner, onClick }: GameCardProps) => {
  return (
    <section key={id} className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <div className="w-12 h-12 rounded-full overflow-hidden">
          <img src={avatar} alt={title} className="w-full h-full object-cover" />
        </div>
        <div className="flex-1 pr-2">
          <h2 className="text-white text-[20px] leading-[1.205em] font-['Russo_One'] whitespace-nowrap overflow-hidden text-ellipsis max-w-[220px]">
            {title}
          </h2>
          <p className="text-[#AFB0B0] text-[12px] leading-[1.17em]">{players}</p>
        </div>
        <button
          className="h-8 px-3 bg-[#F3F084] text-black rounded-full font-['Russo_One'] text-[14px] leading-[1.2em] cursor-pointer"
          onClick={onClick}
        >
          PLAY
        </button>
      </div>

      <div className="w-full h-[202px] rounded-[12px] overflow-hidden border-2 border-black">
        <img src={banner} alt={`${title} banner`} className="w-full h-full object-cover" />
      </div>
    </section>
  );
};
