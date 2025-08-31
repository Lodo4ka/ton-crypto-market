import LootBox from './LootBox';

type BottomFilterBarProps = {
  className?: string;
  price: number;
  onChange?: (count: number) => void;
};

export const BottomFilterBar = ({ className = '', price, onChange }: BottomFilterBarProps) => {
  return (
    <>
      <div className="fixed left-0 right-0 top-0 bottom-[65px] z-40 bg-black/60" />
      <div className={`fixed left-0 right-0 bottom-[65px] z-50 ${className}`}>
        <div className="pb-[env(safe-area-inset-bottom)]">
          <LootBox price={price} onChange={onChange} />
        </div>
      </div>
    </>
  );
};

export default BottomFilterBar;
