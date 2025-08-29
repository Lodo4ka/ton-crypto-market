import cn from 'classnames';

export const ProfileTitle = ({ className }: { className?: string }) => {
  return (
    <div className={cn('flex flex-col items-center w-full mx-auto', className)}>
      <h2 className="font-russo font-normal text-[22px] leading-none">Collector888</h2>
      <div className="mt-[6px] flex items-center gap-[8px]">
        <div className="text-[#f3f084] text-[16px] leading-none flex items-center gap-[4px]">
          ID 888888888{' '}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
          >
            <g clipPath="url(#clip0_1269_11128)">
              <path
                d="M9 3.375C5.25 3.375 2.0475 5.7075 0.75 9C2.0475 12.2925 5.25 14.625 9 14.625C12.75 14.625 15.9525 12.2925 17.25 9C15.9525 5.7075 12.75 3.375 9 3.375ZM9 12.75C6.93 12.75 5.25 11.07 5.25 9C5.25 6.93 6.93 5.25 9 5.25C11.07 5.25 12.75 6.93 12.75 9C12.75 11.07 11.07 12.75 9 12.75ZM9 6.75C7.755 6.75 6.75 7.755 6.75 9C6.75 10.245 7.755 11.25 9 11.25C10.245 11.25 11.25 10.245 11.25 9C11.25 7.755 10.245 6.75 9 6.75Z"
                fill="#F3F084"
              />
            </g>
            <defs>
              <clipPath id="clip0_1269_11128">
                <rect width="18" height="18" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
};
