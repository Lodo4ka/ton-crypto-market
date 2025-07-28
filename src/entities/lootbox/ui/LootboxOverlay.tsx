import { Lootbox } from './Lootbox';
import Overlay from '../../../shared/ui/overlay/Overlay';

interface LootboxProps {
  icon: string;
  title: string;
  description?: string;
  date: string;
  balanceFrom: string;
  balanceTo: string;
  itemTitle: string;
  itemNumber: string;
  onClose: () => void;
  open: boolean;
}

export const LootboxOverlay = ({
  icon,
  title,
  description,
  date,
  balanceFrom,
  balanceTo,
  itemTitle,
  itemNumber,
  onClose,
  open,
}: LootboxProps) => {
  return (
    <Overlay open={open} onClose={onClose}>
      <Lootbox
        icon={icon}
        title={title}
        description={description}
        date={date}
        balanceFrom={balanceFrom}
        balanceTo={balanceTo}
        itemTitle={itemTitle}
        itemNumber={itemNumber}
        onClose={onClose}
      />
    </Overlay>
  );
};
