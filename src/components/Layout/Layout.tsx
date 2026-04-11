import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { ToastProvider } from '../../context/ToastProvider';
import styles from './Layout.module.css';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ToastProvider>
      <div className={styles.layout}>
        <Header />
        <main className={styles.main}>{children}</main>
        <Footer />
      </div>
    </ToastProvider>
  );
};
