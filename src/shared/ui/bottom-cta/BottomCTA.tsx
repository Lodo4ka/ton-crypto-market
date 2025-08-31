import type { ButtonHTMLAttributes, FC } from 'react';

export type BottomCTAProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  label?: string;
  className?: string;
};

export const BottomCTA: FC<BottomCTAProps> = ({ label = 'Play', className, ...props }) => {
  return (
    <div className={`px-4 pb-6 ${className ?? ''}`.trim()}>
      <button
        {...props}
        className={`w-full h-[50px] rounded-[12px] bg-[#007AFF] text-white text-[16px] font-semibold cursor-pointer ${
          props.className ?? ''
        }`.trim()}
      >
        {label}
      </button>
    </div>
  );
};

export default BottomCTA;
