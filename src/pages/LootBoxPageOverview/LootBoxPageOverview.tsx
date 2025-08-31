import { useEffect, useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import SuccessBadge from '../../shared/ui/success-badge/SuccessBadge.tsx';
import { PlayButton } from '../../shared/ui/play-button/PlayButton.tsx';

// Изображение лутбокса из assets (как на странице лутбокса)
import bigLootbox from '../../assets/lootbox/big_lootbox.png';
import { setPlayButtonLabel } from '../../shared/ui/play-button/playButtonSlice.ts';
import { useAppDispatch } from '../../app/hooks.ts';

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const pad = (n: number) => n.toString().padStart(2, '0');

export const LootBoxPageOverview = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setPlayButtonLabel('Got it!'));
  }, []);

  // Время готовности через 7 дней от сейчас
  const targetTs = useMemo(() => Date.now() + 7 * 24 * 60 * 60 * 1000, []);
  const calcLeft = (): TimeLeft => {
    const diff = Math.max(0, targetTs - Date.now());
    const days = Math.floor(diff / (24 * 60 * 60 * 1000));
    const hours = Math.floor((diff % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
    const minutes = Math.floor((diff % (60 * 60 * 1000)) / (60 * 1000));
    const seconds = Math.floor((diff % (60 * 1000)) / 1000);
    return { days, hours, minutes, seconds };
  };

  const [left, setLeft] = useState<TimeLeft>(calcLeft());

  useEffect(() => {
    const i = window.setInterval(() => setLeft(calcLeft()), 1000);
    return () => window.clearInterval(i);
  }, []);

  const onGotIt = () => {
    navigate(`/lootbox/${id ?? ''}`);
  };

  return (
    <div className="w-full text-white">
      {/* Snackbar */}
      <div className="px-4 pt-2">
        <SuccessBadge
          message="Racer Box was added to your profile"
          className="w-full justify-center"
          variant="tint"
        />
      </div>

      {/* Content */}
      <div className="mx-auto w-full flex flex-col items-center gap-6 mt-6">
        <div className="w-[240px] h-[240px] bg-white/5 border border-white/5 rounded-[20px] flex items-center justify-center">
          <img src={bigLootbox} alt="Racer Box" className="w-[70%] object-contain" />
        </div>

        <div className="text-center">
          <div className="text-[32px] leading-[1.1] font-['Russo_One']">Racer Box</div>
          <div className="text-[16px] text-[#AFB0B0] font-exo2-bold mt-1">UNKNOWN RARITY</div>
        </div>

        <div className="text-center text-[16px]">
          <span className="font-semibold">Racer Box</span> will be ready in
        </div>

        {/* Countdown */}
        <div className="grid grid-cols-4 gap-3 w-full">
          <div className="flex flex-col items-center">
            <div className="text-[32px] font-['Russo_One'] rounded-[16px] leading-none px-[16px] py-[8px] border-1 border-white/25 w-full text-center">
              {left.days}
            </div>
            <div className="text-[#AFB0B0] text-xs mt-[8px]">DAYS</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-[32px] font-['Russo_One'] rounded-[16px] leading-none px-[16px] py-[8px] border-1 border-white/25 w-full text-center">
              {pad(left.hours)}
            </div>
            <div className="text-[#AFB0B0] text-xs mt-[8px]">HOURS</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-[32px] font-['Russo_One'] rounded-[16px] leading-none px-[16px] py-[8px] border-1 border-white/25 w-full text-center">
              {pad(left.minutes)}
            </div>
            <div className="text-[#AFB0B0] text-xs mt-[8px]">MINUTES</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-[32px] font-['Russo_One'] rounded-[16px] leading-none px-[16px] py-[8px] border-1 border-white/25 w-full text-center ">
              {pad(left.seconds)}
            </div>
            <div className="text-[#AFB0B0] text-xs mt-[8px]">SECONDS</div>
          </div>
        </div>
      </div>
    </div>
  );
};
