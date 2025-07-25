import { TonConnectUIProvider } from '@tonconnect/ui-react';
import AppRouter from './routes';
import OverlayPortal from './shared/ui/overlay/OverlayPortal';

function App() {
  return (
    <>
      <TonConnectUIProvider manifestUrl="https://<YOUR_APP_URL>/tonconnect-manifest.json">
        <div className="w-full min-h-screen bg-[var(--tg-bg-black)] text-white">
          <AppRouter />
        </div>
      </TonConnectUIProvider>
      <OverlayPortal />
    </>
  );
}

export default App;
