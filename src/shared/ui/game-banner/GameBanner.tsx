import { useState } from 'react';

interface GameBannerProps {
  images: string[];
  className?: string;
}

export const GameBanner = ({ images, className = '' }: GameBannerProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
    <div className={`relative ${className}`}>
      <div className="w-full h-[280px] rounded-lg overflow-hidden">
        <img
          src={images[currentImageIndex]}
          alt="Game banner"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Pagination dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentImageIndex ? 'bg-white' : 'bg-white/40'
            }`}
            onClick={() => setCurrentImageIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
