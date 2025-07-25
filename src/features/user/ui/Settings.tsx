import ChevronIcon from '../../../assets/icons/chevron.svg';
import { Switch } from '../../../shared/ui/switch/Switch';
import React, { useState } from 'react';
import USFlag from '../../../assets/icons/united-states.svg';
import RUFlag from '../../../assets/icons/russia.svg';
import DEFlag from '../../../assets/icons/germany.svg';

// Компонент флага языка
const LanguageFlag = ({
  code,
  selected,
  onClick,
  className = '',
}: {
  code: 'US' | 'RU' | 'DE';
  selected?: boolean;
  onClick?: () => void;
  className?: string;
}) => {
  // SVG-флаги (заглушки, можно заменить на импортированные SVG)
  const flags: Record<string, React.ReactNode> = {
    US: USFlag,
    RU: RUFlag,
    DE: DEFlag,
  };
  return (
    <button
      type="button"
      onClick={onClick}
      className={`relative flex items-center justify-center rounded-full p-1 transition-all ${selected ? 'ring-4 ring-blue-500' : 'ring-2 ring-black/30'} ${className} cursor-pointer`}
      aria-pressed={selected}
    >
      <img src={flags[code] as string} alt={code} className="w-12 h-12 rounded-full" />
    </button>
  );
};

export const Settings = ({ className = '' }: { className?: string }) => {
  const [tacticalResponse, setTacticalResponse] = useState(false);
  const [playAnimation, setPlayAnimation] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [selectedLang, setSelectedLang] = useState<'US' | 'RU' | 'DE'>('US');

  const flags = [
    { code: 'US', label: 'United States' },
    { code: 'RU', label: 'Russia' },
    { code: 'DE', label: 'Germany' },
  ];

  return (
    <div className={`w-full flex flex-col gap-4 ${className}`}>
      {/* Language Block */}
      <div className="flex items-center  rounded-xl p-4 border-b border-white/10">
        <div className="flex flex-col gap-0.5">
          <span className="text-white text-[14px] font-semibold leading-tight">Language</span>
          <span className="text-white/40 text-[12px] leading-tight">Marketplace language</span>
        </div>
        <div className="flex flex-row gap-2 ml-auto">
          {flags.map((flag) => (
            <LanguageFlag
              key={flag.code}
              code={flag.code as 'US' | 'RU' | 'DE'}
              selected={selectedLang === flag.code}
              onClick={() => setSelectedLang(flag.code as 'US' | 'RU' | 'DE')}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-4 ">
        <div className="flex flex-row items-center  rounded-xl p-4 justify-between border-b border-white/10">
          <div className="flex flex-col gap-0.5">
            <span className="text-white text-[14px] font-semibold leading-tight">
              Tactical Response
            </span>
            <span className="text-white/40 text-[12px] leading-tight">
              Haptic feedback during interaction
            </span>
          </div>
          <Switch checked={tacticalResponse} onChange={setTacticalResponse} />
        </div>
        <div className="flex flex-row items-center  rounded-xl p-4 justify-between border-b border-white/10">
          <div className="flex flex-col gap-0.5">
            <span className="text-white text-[14px] font-semibold leading-tight">
              Play Animation
            </span>
            <span className="text-white/40 text-[12px] leading-tight">
              Turn on/off items animation
            </span>
          </div>
          <Switch checked={playAnimation} onChange={setPlayAnimation} />
        </div>
        <div className="flex flex-row items-center  rounded-xl p-4 justify-between border-b border-white/10">
          <div className="flex flex-col gap-0.5">
            <span className="text-white text-[14px] font-semibold leading-tight">Dark Mode</span>
            <span className="text-white/40 text-[12px] leading-tight">Toggle light/dark theme</span>
          </div>
          <Switch checked={darkMode} onChange={setDarkMode} />
        </div>
      </div>
      <button className="flex flex-row items-center justify-between  rounded-xl p-4 cursor-pointer border-b border-white/10">
        <span className="text-white text-[14px] font-semibold leading-tight">Support</span>
        <img src={ChevronIcon} alt="chevron" className="w-6 h-6 opacity-40" />
      </button>
    </div>
  );
};
