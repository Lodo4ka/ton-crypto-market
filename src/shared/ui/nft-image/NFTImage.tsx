interface NFTImageProps {
  src: string;
  alt: string;
  className?: string;
}

export const NFTImage = ({ src, alt, className = '' }: NFTImageProps) => {
  return (
    <div className={`${className}`}>
      <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-gray-100">
        <img src={src} alt={alt} className="w-full h-full object-cover" />
      </div>
    </div>
  );
};
