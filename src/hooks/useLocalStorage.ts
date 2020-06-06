import React, { useState, useEffect } from "react";

type ReturnType<T> = [T, React.Dispatch<React.SetStateAction<T>>];

export function useLocalStorage<T>(
  key: string,
  initialValue?: T
): ReturnType<T> {
  const [value, setValue] = useState<T>(() => {
    if (!initialValue) return;

    try {
      const valueToStore = window.localStorage.getItem(key);
      return valueToStore ? JSON.parse(valueToStore) : initialValue;
    } catch (err) {
      console.error(err);
      return initialValue;
    }
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
}
