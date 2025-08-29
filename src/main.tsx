import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { Provider } from 'react-redux';
import { store } from './app/store.ts';
import WebApp from '@twa-dev/sdk';

WebApp.ready();
if (WebApp.initDataUnsafe?.user) {
  console.log('Telegram User ID:', WebApp.initDataUnsafe.user.id);
} else {
  console.log('Telegram WebApp user not found');
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
);
