type GamePageTitleProps = {
  title: string;
  description: string;
};

export const GamePageTitle = ({ title, description }: GamePageTitleProps) => {
  return (
    <div className="mt-4 text-[16px] leading-[1.25]">
      <span className="text-white font-exo2-bold">{title}</span>
      <br />
      <br />
      <span className="text-[rgba(255,255,255,0.8)]">{description}</span>
    </div>
  );
};
