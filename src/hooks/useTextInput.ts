import React, { useState } from "react";

type ReturnType = [
  string,
  (e: React.FormEvent<HTMLInputElement>) => void,
  () => void
];

export function useTextInput(initialValue: string): ReturnType {
  const [value, setValue] = useState(initialValue);

  const setInput = (e: React.FormEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };

  const reset = () => {
    setValue("");
  };

  return [value, setInput, reset];
}
