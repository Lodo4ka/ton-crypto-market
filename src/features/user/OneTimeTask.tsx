import cn from 'classnames';
import React from 'react';
import telegram from '../../assets/tasks/telegram_logo.svg';
import people from '../../assets/tasks/people_logo.svg';

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
      <span className="flex items-center justify-center w-16 h-16 rounded-full">
        {/* Можно заменить на <img src={require('...')} /> */}
        <img src={telegram} alt="people" />
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
      <span className="flex items-center justify-center w-16 h-16 rounded-full">
        <img src={people} alt="people" />
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
    return (
      <button
        className="bg-green-900 bg-opacity-40 text-green-400 rounded-full px-10 py-2 text-xl font-semibold cursor-default"
        disabled
      >
        Claimed
      </button>
    );
  }
  return (
    <button className="bg-gray-700 bg-opacity-60 text-gray-200 rounded-full px-10 py-2 text-xl font-semibold hover:bg-gray-600 transition">
      Check
    </button>
  );
};

export const OneTimeTask = ({ className }: { className?: string }) => {
  return (
    <div className={cn('max-w-xl mx-auto mt-6', className)}>
      <h2 className="text-gray-400 text-2xl font-semibold mb-2">ONE-TIME TASKS</h2>
      <div className="space-y-4">
        {tasks.map((task) => (
          <div
            key={task.id}
            className={cn(
              'flex items-center justify-between bg-zinc-900 rounded-2xl px-6 py-4 shadow-md',
              task.className,
            )}
          >
            <div className="flex items-center gap-4">
              {task.icon}
              <div>
                <div className="text-white text-xl font-semibold leading-tight">{task.title}</div>
                <div className="text-green-400 text-lg font-bold flex items-center gap-1 mt-1">
                  {task.reward}{' '}
                  <span className="text-green-400 text-xl">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="13"
                      viewBox="0 0 12 13"
                      fill="none"
                    >
                      <path
                        d="M4.62259 1.48558C4.64259 1.41755 4.68409 1.35783 4.74087 1.31536C4.79765 1.27289 4.86667 1.24996 4.93757 1.25H7.56242C7.61438 1.25004 7.66559 1.26242 7.71183 1.28612C7.75807 1.30982 7.79802 1.34417 7.82839 1.38633C7.85876 1.42849 7.87869 1.47726 7.88652 1.52863C7.89436 1.57999 7.88988 1.63249 7.87346 1.68179L6.70541 5.18727H9.20295C9.26439 5.18722 9.32461 5.20443 9.37675 5.23694C9.42889 5.26945 9.47086 5.31594 9.49787 5.37113C9.52488 5.42631 9.53586 5.48798 9.52954 5.5491C9.52323 5.61021 9.49988 5.66833 9.46215 5.71683L4.86867 11.6227C4.82162 11.6835 4.75471 11.7259 4.67962 11.7424C4.60453 11.7589 4.52604 11.7485 4.45783 11.713C4.38962 11.6775 4.33604 11.6192 4.30643 11.5483C4.27681 11.4773 4.27305 11.3982 4.2958 11.3248L5.47764 7.484H3.29705C3.24604 7.48403 3.19572 7.47217 3.1501 7.44935C3.10447 7.42654 3.0648 7.3934 3.03422 7.35257C3.00365 7.31173 2.98301 7.26434 2.97396 7.21413C2.96491 7.16393 2.96768 7.11231 2.98207 7.06337L4.62259 1.48558Z"
                        fill="#49DF64"
                      />
                    </svg>
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
