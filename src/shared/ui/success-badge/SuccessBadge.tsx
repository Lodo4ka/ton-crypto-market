import cn from 'classnames';

type SuccessBadgeVariant = 'solid' | 'tint';

export interface SuccessBadgeProps {
  message: string;
  variant?: SuccessBadgeVariant;
  className?: string;
}

const getPalette = (variant: SuccessBadgeVariant) => {
  if (variant === 'tint') {
    return {
      container: 'bg-[#34C759] text-white backdrop-blur-md',
      circleBg: '#34C759',
      checkColor: '#ffffff',
    } as const;
  }
  return {
    container: 'bg-[#34C759] text-black',
    circleBg: '#ffffff',
    checkColor: '#34C759',
  } as const;
};

export const SuccessBadge = ({ message, variant = 'solid', className }: SuccessBadgeProps) => {
  const { container, circleBg, checkColor } = getPalette(variant);

  return (
    <div className={cn('flex items-center gap-2 rounded-[14px] px-4 py-3', container, className)}>
      <span
        className="inline-flex items-center justify-center w-6 h-6 rounded-full"
        style={{ backgroundColor: circleBg }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="27"
          height="30"
          viewBox="0 0 27 30"
          fill="none"
        >
          <path
            d="M13.5 25C7.9902 25 3.5 20.5098 3.5 15C3.5 9.48039 7.9902 5 13.5 5C19.0196 5 23.5 9.48039 23.5 15C23.5 20.5098 19.0196 25 13.5 25ZM12.402 19.7941C12.7353 19.7941 13.0196 19.6373 13.2255 19.3137L17.8333 12.0588C17.951 11.8529 18.0784 11.6275 18.0784 11.4118C18.0784 10.951 17.6765 10.6569 17.2451 10.6569C16.9902 10.6569 16.7353 10.8137 16.549 11.1078L12.3627 17.8333L10.3725 15.2647C10.1275 14.9412 9.91177 14.8529 9.62745 14.8529C9.18627 14.8529 8.84314 15.2157 8.84314 15.6569C8.84314 15.8824 8.93137 16.098 9.07843 16.2941L11.5392 19.3137C11.7941 19.6569 12.0686 19.7941 12.402 19.7941Z"
            fill="white"
          />
        </svg>
      </span>
      <span className="text-[14px] font-medium leading-none">{message}</span>
    </div>
  );
};

export default SuccessBadge;
