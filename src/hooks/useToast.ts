import { useState, useCallback } from 'react';

export const useToast = () => {
  const [message, setMessage] = useState<string | null>(null);

  const showToast = useCallback((msg: string, duration = 2000) => {
    setMessage(msg);
    setTimeout(() => setMessage(null), duration);
  }, []);

  return { message, showToast };
};
