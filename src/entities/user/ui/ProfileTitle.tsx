import cn from 'classnames';

export const ProfileTitle = ({ className }: { className?: string }) => {
  return (
    <div className={cn('flex flex-col items-center w-full max-w-md mx-auto relative', className)}>
      <h2 className="font-bold text-[20px]">Collector888</h2>
      <p className="p-0 text-gray text-[12px]">Active since: 20/06/2025</p>
    </div>
  );
};
