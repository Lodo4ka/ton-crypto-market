import { TonConnectUIProvider } from '@tonconnect/ui-react';
import AppRouter from './routes';

function App() {
  return (
    <TonConnectUIProvider manifestUrl="https://<YOUR_APP_URL>/tonconnect-manifest.json">
      <div className="w-full min-h-screen bg-[var(--tg-bg-black)] text-white flex justify-center">
        <div className="w-full max-w-[576px] mx-auto">
          <AppRouter />
        </div>
      </div>
    </TonConnectUIProvider>
  );
}

export default App;
