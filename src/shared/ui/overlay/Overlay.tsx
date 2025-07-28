import React from 'react';
import { createPortal } from 'react-dom';

interface OverlayProps {
  open: boolean;
  onClose?: () => void;
  children: React.ReactNode;
  className?: string;
}

const Overlay = ({ open, onClose, children, className = '' }: OverlayProps) => {
  if (!open) return null;

  return createPortal(
    <div
      className={`fixed inset-0 z-50 left-0 right-0 bottom-0 bg-opacity-60 flex ${className}`}
      onClick={onClose}
    >
      <div className="w-full mt-auto" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>,
    document.body,
  );
};

export default Overlay;
