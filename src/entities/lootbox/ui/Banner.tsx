export const Banner = ({ image }: { image: string }) => {
  return (
    <div className="w-full h-[202px] rounded-[12px] overflow-hidden">
      <img src={image} alt="banner" className="w-full h-full object-cover" />
    </div>
  );
};
