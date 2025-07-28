interface ButtonCloseProps {
  onClose: () => void;
  className?: string;
}

export const ButtonClose = ({ onClose, className = '' }: ButtonCloseProps) => {
  return (
    <button
      className={`w-9 h-9 flex items-center justify-center rounded-full bg-gray-500 hover:bg-gray-600 transition cursor-pointer group ${className}`}
      onClick={onClose}
      aria-label="Close"
    >
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13 1L1 13M1 1L13 13"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="group-hover:stroke-gray-200 transition-colors"
        />
      </svg>
    </button>
  );
};
