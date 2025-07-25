import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../../../app/store';
import Overlay from './Overlay';
import OverlayContent from './OverlayContent';
import { closeOverlay } from './overlaySlice';
import { createPortal } from 'react-dom';

function OverlayPortal() {
  const dispatch = useDispatch();
  const { isOpen, props } = useSelector((state: RootState) => state.overlay);

  if (!isOpen || !props) return null;

  return createPortal(
    <Overlay open={isOpen} onClose={() => dispatch(closeOverlay())}>
      <OverlayContent {...props} onClose={() => dispatch(closeOverlay())} />
    </Overlay>,
    document.body,
  );
}

export default OverlayPortal;
