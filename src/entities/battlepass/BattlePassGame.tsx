import React from 'react';
import { BattlePass } from './BattlePass';
import CheckOutlined from '../../assets/icons/Icon/CheckOutlined.svg';
import styles from './BattlePassGame.module.css';
import LVL_star_1 from '../../assets/icons/LVL_star_1.svg';

type Reward = {
  quantity: number;
  claimed?: boolean;
};

type Level = {
  level: number;
  free: Reward;
  premium: Reward;
};

interface BattlePassGameProps {
  className?: string;
}

// const STAR_YELLOW = '/src/assets/icons/star-yellow-cicrle.svg';

function RewardCard({ reward, variant }: { reward: Reward; variant: 'free' | 'premium' }) {
  const containerBg =
    variant === 'free' ? styles.freePassBackgroundCard : styles.battlePassBackgroundCard;

  return (
    <div
      className={`flex justify-center items-center cursor-pointer w-[82px] h-[60px] p-[4px] relative rounded-[8px] ${styles.rewardCard} ${
        variant === 'free' ? styles.gradientBorder : styles.gradientBorderGold
      } ${containerBg}`}
    >
      <div className="flex items-center justify-between gap-3 w-full h-full">
        <div className={variant === 'free' ? styles.previewBox : styles.previewBoxBattlePass} />
        <span
          className={`shrink-0 whitespace-nowrap absolute bottom-[8px] right-[8px] ${variant === 'free' ? styles.rewardQuantityFree : styles.rewardQuantityBattlePass}`}
        >
          x{reward.quantity}
        </span>
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="inline-flex h-7 w-7 items-center justify-center rounded-md text-[13px] text-white">
          {variant === 'free' && <img src={CheckOutlined} alt="check" />}
        </span>
      </div>
    </div>
  );
}

function LevelStar({ level }: { level: number }) {
  console.log('level :>> ', level);
  return (
    <img
      src={LVL_star_1}
      alt="level-star"
      className="z-10 w-[50px] h-[50px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-none"
    />
  );
}

export const BattlePassGame: React.FC<BattlePassGameProps> = ({ className }) => {
  const levels: Level[] = [
    { level: 1, free: { quantity: 50, claimed: true }, premium: { quantity: 50 } },
    { level: 2, free: { quantity: 50 }, premium: { quantity: 50 } },
    { level: 3, free: { quantity: 50 }, premium: { quantity: 50 } },
    { level: 4, free: { quantity: 50 }, premium: { quantity: 50 } },
  ];
  return (
    <section
      className={`rounded-xl bg-[var(--tg-bg-light)] ${className ?? ''}`}
      aria-label="Battle Pass"
    >
      <BattlePass />

      <div className="mx-auto w-full relative">
        <div className="flex text-[16px]">
          <div className="text-center text-[16px] font-exo2-bold text-white flex-1 bg-[#5E5E5E] p-[8px]">
            Free Pass
          </div>
          <div className="text-center text-[16px] font-exo2-bold text-white flex-1 bg-[#72C0EC] p-[8px]">
            Battle Pass
          </div>
        </div>
        <div className="flex flex-col">
          {levels.map((lvl) => (
            <div key={lvl.level} className="relative grid grid-cols-[1fr_8px_1fr]">
              <div
                className={`${styles.freePassBackground} py-[20px] flex justify-center items-center`}
              >
                <RewardCard reward={lvl.free} variant="free" />
              </div>
              <div className="flex flex-col items-center h-full relative">
                <LevelStar level={lvl.level} />
              </div>
              <div
                className={`${styles.battlePassBackground} py-[20px] flex justify-center items-center`}
              >
                <RewardCard reward={lvl.premium} variant="premium" />
              </div>
            </div>
          ))}
        </div>
        <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-full">
          <div className={`${styles.linear} h-full w-[8px]`} aria-label={`level-${1}`}></div>
        </div>
      </div>
    </section>
  );
};
