import './MainLayout.css';

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="main-layout-container">
      <div>{children}</div>
    </div>
  );
};
