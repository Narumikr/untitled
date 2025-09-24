import { useEffect, useRef, useState } from 'react';

import { ConsoleError } from '@/internal/logging';
import { deserializeDataWithTemplate, serializeData } from '@/utils/serialization';

export const useSessionStorage = <T>(sessionStorageKey: string, initialValue: T) => {
  const isClient = useRef(typeof window !== 'undefined');
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (!isClient.current) return initialValue;
    try {
      const items = sessionStorage.getItem(sessionStorageKey);
      if (items) {
        return deserializeDataWithTemplate(JSON.parse(items), initialValue);
      }
    } catch (err) {
      ConsoleError('Failed to get session storage value : ', err);
    }
    return initialValue;
  });

  useEffect(() => {
    if (!isClient.current) return;
    try {
      const serialized = JSON.stringify(serializeData(storedValue));
      sessionStorage.setItem(sessionStorageKey, serialized);
    } catch (err) {
      ConsoleError('Failed to set session storage : ', err);
    }
  }, [sessionStorageKey, storedValue]);

  const deleteSessionStorage = () => {
    setStoredValue(initialValue);
    sessionStorage.removeItem(sessionStorageKey);
  };

  return {
    storedValue,
    setStoredValue,
    deleteSessionStorage
  };
};
