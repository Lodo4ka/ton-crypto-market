import React from 'react';
import { BattlePass } from './BattlePass';
import CheckOutlined from '../../assets/icons/Icon/CheckOutlined.svg';
import styles from './BattlePassGame.module.css';

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

const STAR_YELLOW = '/src/assets/icons/star-yellow-cicrle.svg';

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

function LevelStar({ level, ready }: { level: number; ready?: boolean }) {
  return (
    <div className="flex w-full flex-col items-center">
      <div className="h-2 w-1 rounded-full bg-[linear-gradient(180deg,#ffc53d_43%,#faad14_96%)]" />
      <div className="my-1 inline-flex items-center justify-center">
        <img
          src={STAR_YELLOW}
          alt="level"
          className={`h-10 w-10 ${ready ? '' : 'grayscale opacity-80'}`}
        />
        <span className="-ml-7 text-sm font-bold text-white">{level}</span>
      </div>
      <div className="h-2 w-1 rounded-full bg-[linear-gradient(180deg,#ffc53d_43%,#faad14_96%)]" />
    </div>
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

      <div className="mx-auto w-full">
        <div className="flex text-[16px]">
          <div className="text-center text-[16px] font-exo2-bold text-white flex-1 bg-[#5E5E5E] p-[8px]">
            Free Pass
          </div>
          <div className="text-center text-[16px] font-exo2-bold text-white flex-1 bg-[#72C0EC] p-[8px]">
            Battle Pass
          </div>
        </div>
        <div className="grid grid-cols-[1fr_minmax(16px,24px)_1fr]">
          {levels.map((lvl, idx) => (
            <React.Fragment key={lvl.level}>
              <div
                className={`${styles.freePassBackground} py-[20px] flex justify-center items-center`}
              >
                <RewardCard reward={lvl.free} variant="free" />
              </div>

              <div className="flex flex-col items-center py-3">
                <LevelStar level={lvl.level} ready={idx === 0} />
              </div>

              <div
                className={`${styles.battlePassBackground} py-[20px] flex justify-center items-center`}
              >
                <RewardCard reward={lvl.premium} variant="premium" />
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};
