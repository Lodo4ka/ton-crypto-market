import light from '../../../assets/icons/light.svg';
import { SmallPillFillButton } from '../../../shared/ui/small-pill-fill-button/SmallPillButton.tsx';

type Task = {
  id: string;
  color: string; // Tailwind bg color
  title: string;
  reward: number;
};

const tasks: Task[] = [
  {
    id: 'lootbox',
    color: 'bg-green-400',
    title: 'Buy a loot box',
    reward: 200,
  },
  {
    id: 'sell',
    color: 'bg-yellow-400',
    title: 'Sell an asset',
    reward: 200,
  },
  {
    id: 'something',
    color: 'bg-sky-400',
    title: 'Something else',
    reward: 100,
  },
  {
    id: 'something-more',
    color: 'bg-red-600',
    title: 'Something else more',
    reward: 100,
  },
];

type DailyTaskProps = {
  className?: string;
};

export const DailyTask = ({ className }: DailyTaskProps) => {
  return (
    <div className={`max-w-xl mx-auto mt-6 ${className ?? ''}`}>
      <h2 className="text-[#AFB0B0] text-[12px] font-exo2-bold mb-2">DAILY TASKS</h2>
      <div className="space-y-4">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="flex items-center justify-between bg-zinc-900 rounded-2xl p-[12px] shadow-md"
          >
            <div className="flex items-center gap-4">
              <span className={`w-[40px] h-[40px] rounded-full ${task.color} flex-shrink-0`} />
              <div>
                <div className="text-white text-[12px] leading-tight">{task.title}</div>
                <div className="text-[#F3F084] text-[12px] font-exo2-bold flex items-center gap-1 mt-1">
                  {task.reward}{' '}
                  <span className="text-[#F3F084] text-[12px]">
                    <img src={light} alt="light" className="w-[12px] h-[13px]" />
                  </span>
                </div>
              </div>
            </div>
            <SmallPillFillButton color="gray" label="Start" />
          </div>
        ))}
      </div>
    </div>
  );
};
