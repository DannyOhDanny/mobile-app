import { createContext, useContext } from 'react';

type ToastFunction = (msg: string) => void;

export const ToastContext = createContext<ToastFunction | undefined>(undefined);

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within ToastProvider');
  }
  return context;
};
