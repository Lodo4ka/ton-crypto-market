import React from 'react';

interface OverlayProps {
  open: boolean;
  onClose?: () => void;
  children: React.ReactNode;
  className?: string;
}

const Overlay = ({ open, onClose, children, className = '' }: OverlayProps) => {
  if (!open) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 ${className}`}
      onClick={onClose}
    >
      <div onClick={(e) => e.stopPropagation()}>{children}</div>
    </div>
  );
};

export default Overlay;
