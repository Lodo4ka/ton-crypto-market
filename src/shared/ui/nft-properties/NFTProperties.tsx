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
    <div className={`${className}`}>
      <div className="grid grid-cols-[max-content_1fr] gap-0 rounded-lg overflow-hidden border border-gray-700">
        <div className="border-r border-gray-700">
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
                  property.highlighted ? 'text-[#FF8C00] font-bold font-exo2-bold' : 'text-white'
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
