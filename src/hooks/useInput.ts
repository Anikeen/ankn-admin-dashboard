import { useState, ChangeEvent, FocusEvent } from 'react';

export interface IUseInput {
  value: string;
  setValue: any;
  onFocus: () => void;
  onChange: (e: ChangeEvent) => void;
  onBlur: (e: FocusEvent) => void;
  isDirty: boolean;
  setDirty: (state: boolean) => void;
  isFocused: boolean;
}

function useInput(initialValue: string): IUseInput {
  const [value, setValue] = useState(initialValue);
  const [isDirty, setDirty] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  function onFocus() {
    setIsFocused(!isFocused);
  }

  function onChange(e: ChangeEvent) {
    const target = e.target as HTMLTextAreaElement;
    setValue(target.value);
  }

  function onBlur(e: FocusEvent) {
    const target = e.target as HTMLTextAreaElement;
    setValue(target.value.trim());
    setDirty(true);
    setIsFocused(!isFocused);
  }

  return {
    value,
    setValue,
    isDirty,
    setDirty,
    isFocused,
    onFocus,
    onChange,
    onBlur,
  }
}

export default useInput;