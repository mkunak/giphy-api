import { ReactNode, useCallback } from 'react';
import { toaster } from '../utils';

type TVariant = 'info' | 'success' | 'error' | 'debug' | 'warning' | 'dark'

export const useMessage = () => {
  return useCallback((variant: TVariant, text: ReactNode) => {
    if (text) {
      switch (variant) {
          case 'success':
            return toaster.onSuccess(text);
          case 'info':
            return toaster.onInfo(text);
          case 'warning':
            return toaster.onWarning(text);
          case 'dark':
            return toaster.onDark(text);
          case 'error':
            return toaster.onError(text);
          default:
            toaster.onInfo(text);
      }
    }
  }, []);
};
