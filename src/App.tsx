import { TonConnectUIProvider } from '@tonconnect/ui-react';
import AppRouter from './app/routes.tsx';

function App() {
  return (
    <>
      <TonConnectUIProvider manifestUrl="https://<YOUR_APP_URL>/tonconnect-manifest.json">
        <div className="w-full min-h-screen bg-[var(--tg-bg-black)] text-white overflow-hidden">
          <AppRouter />
        </div>
      </TonConnectUIProvider>
    </>
  );
}

export default App;
