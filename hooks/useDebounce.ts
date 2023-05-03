import { useCallback, useEffect, useRef } from 'react';

export const useDebounce = (
  callback: (...args: any[]) => void,
  delay: number,
  dependencies: any[] = [],
) => {
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const useDebounce = useCallback(
    (...args: any[]) => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }

      timerRef.current = setTimeout(() => {
        callback(...args);
      }, delay);
    },
    [...dependencies, delay],
  );

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  return useDebounce;
};
