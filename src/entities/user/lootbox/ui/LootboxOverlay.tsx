import { Lootbox } from './Lootbox';
import Overlay from '../../../../shared/ui/overlay/Overlay';

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
