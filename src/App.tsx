import AppRouter from './routes';

function App() {
  return (
    <div className="w-full min-h-screen bg-[var(--tg-bg-black)] text-white flex justify-center">
      <div className="w-full max-w-[576px] mx-auto">
        <AppRouter />
      </div>
    </div>
  );
}

export default App;
