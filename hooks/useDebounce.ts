import { useEffect, useRef, useState } from 'react';

export const useDebounce = <T>(value: T, delay = 300): T => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);
  const handlerRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    if (handlerRef.current) {
      clearTimeout(handlerRef.current);
    }

    handlerRef.current = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handlerRef.current);
    };
  }, [value, delay]);

  return debouncedValue;
};
