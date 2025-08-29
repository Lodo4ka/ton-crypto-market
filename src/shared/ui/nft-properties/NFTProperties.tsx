interface PropertyItem {
  label: string;
  value: string;
  highlighted?: boolean;
}

interface NFTPropertiesProps {
  properties: PropertyItem[];
  className?: string;
}

export const NFTProperties = ({ properties, className = '' }: NFTPropertiesProps) => {
  return (
    <div className={`px-4 ${className}`}>
      <div className="grid grid-cols-2 gap-0 rounded-lg overflow-hidden">
        {/* Labels column */}
        <div className="bg-[#1A1A1A]">
          {properties.map((property, index) => (
            <div
              key={`label-${index}`}
              className="px-4 py-3 border-b border-gray-700 last:border-b-0"
            >
              <span className="text-white text-base">{property.label}</span>
            </div>
          ))}
        </div>

        {/* Values column */}
        <div className="bg-[#1A1A1A]">
          {properties.map((property, index) => (
            <div
              key={`value-${index}`}
              className="px-4 py-3 border-b border-gray-700 last:border-b-0"
            >
              <span
                className={`text-base ${
                  property.highlighted
                    ? 'text-[#FF8C00] font-bold'
                    : 'text-white'
                }`}
              >
                {property.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
