import { GameCard } from '../entities/gamecard/GameCard';

export const Game = () => {
  const sections = [
    {
      id: 'top-speed',
      title: 'Top Speed: Racing Legends',
      players: '300k total players',
      avatar: '/figma/48f1fa28dbb75a2bfe7369123a4494f7cf5e62aa.png',
      banner: '/figma/867479926bbbaadc6e682a53eb63070a09825ade.png',
      onClick: () => {},
    },
    {
      id: 'boxing',
      title: 'Boxing. Ring Warriors',
      players: '300k total players',
      avatar: '/figma/ede1def55d46cad8d65307881a6520f21129b1df.png',
      banner: '/figma/b3626f1346fc6dc7c6f5970d72064f4bd66f28e1.png',
      onClick: () => {},
    },
  ];

  return (
    <div className="min-h-screen bg-[var(--tg-bg-black)] text-white">
      <div className="flex flex-col gap-8">
        {sections.map((s) => (
          <GameCard
            key={s.id}
            id={s.id}
            title={s.title}
            avatar={s.avatar}
            players={s.players}
            banner={s.banner}
            onClick={s.onClick}
          />
        ))}
      </div>
    </div>
  );
};
