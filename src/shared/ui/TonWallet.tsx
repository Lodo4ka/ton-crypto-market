import { TonConnectButton } from '@tonconnect/ui-react';

export const TonWallet = ({ className }: { className?: string }) => {
  return (
    <div className={className}>
      <TonConnectButton />
    </div>
  );
};
