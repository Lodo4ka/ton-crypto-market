import styles from './MainLayout.module.css';

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.mainLayoutContainer}>
      <div>{children}</div>
    </div>
  );
};
