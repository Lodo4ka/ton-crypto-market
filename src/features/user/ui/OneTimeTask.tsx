import cn from 'classnames';
import React from 'react';
import telegram from '../../../assets/tasks/telegram_logo.svg';
import people from '../../../assets/tasks/people_logo.svg';
import light from '../../../assets/icons/light.svg';
import { SmallPillFillButton } from '../../../shared/ui/small-pill-fill-button/SmallPillButton.tsx';

// Тип задачи
interface Task {
  id: string;
  icon: React.ReactNode;
  title: string;
  reward: number;
  status: 'claimed' | 'check';
  className?: string;
}

// Пример данных задач
const tasks: Task[] = [
  {
    id: 'subscribe',
    icon: (
      <span className="flex items-center justify-center rounded-full flex-1">
        {/* Можно заменить на <img src={require('...')} /> */}
        <img src={telegram} alt="people" className="w-[40px] h-[40px]" />
      </span>
    ),
    title: 'Subscribe to @skinz channel',
    reward: 200,
    status: 'claimed',
    className: 'bg-blue-500',
  },
  {
    id: 'invite',
    icon: (
      <span className="flex items-center justify-center rounded-full flex-1">
        <img src={people} alt="people" className="w-[40px] h-[40px]" />
      </span>
    ),
    title: 'Invite friend',
    reward: 250,
    status: 'check',
    className: 'bg-purple-500',
  },
];

const statusButton = (status: Task['status']) => {
  if (status === 'claimed') {
    return <SmallPillFillButton color="yellow-blur" label="Claimed" />;
  }
  return <SmallPillFillButton color="gray" label="Check" />;
};

export const OneTimeTask = ({ className }: { className?: string }) => {
  return (
    <div className={cn('max-w-xl mx-auto mt-6', className)}>
      <h2 className="text-[#AFB0B0] text-[12px] font-exo2-bold mb-2">ONE-TIME TASKS</h2>
      <div className="space-y-4">
        {tasks.map((task) => (
          <div
            key={task.id}
            className={cn(
              'flex items-center justify-between bg-zinc-900 rounded-2xl p-[12px] shadow-md',
              task.className,
            )}
          >
            <div className="flex items-center gap-4 flex-1">
              <div>{task.icon}</div>
              <div className="flex-1">
                <div className="text-white text-[12px] leading-tight">{task.title}</div>
                <div className="text-[#F3F084] text-[12px] font-exo2-bold flex items-center gap-1 mt-1">
                  {task.reward}{' '}
                  <span className="text-[#F3F084]">
                    <img src={light} alt="light" className="w-[12px] h-[13px]" />
                  </span>
                </div>
              </div>
            </div>
            {statusButton(task.status)}
          </div>
        ))}
      </div>
    </div>
  );
};
