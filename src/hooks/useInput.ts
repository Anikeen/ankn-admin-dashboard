import { useState, useEffect, ChangeEvent, FocusEvent } from 'react';

interface Ivalidation {
  minLength: number;
  isEmail?: boolean;
  isName?: boolean;
  isEmpty?: boolean;
}

type validationCallback = (value: string) => void;

export interface IUseValidation {
  minLength: number;
  minLengthError: boolean;
  isEmpty: boolean;
  emailError: boolean;
}

export interface IUseInput extends IUseValidation {
  value: string;
  setValue: any;
  onFocus: () => void;
  onChange: (e: ChangeEvent) => void;
  onBlur: (e: FocusEvent) => void;
  isDirty: boolean;
  setDirty: (state: boolean) => void;
  isFocused: boolean;
}

function useValidation(value: string, validations: Ivalidation, setValue: validationCallback) {
  const [minLengthError, setMinLengthError] = useState(true);
  const [isEmpty, setEmpty] = useState(true);
  const [emailError, setEmailError] = useState(true);

  useEffect(() => {
    for (const validation in validations) {
      switch (validation) {
        case 'minLength':
          value.length < validations['minLength'] ? setMinLengthError(true) : setMinLengthError(false);
          break;
        case 'isEmpty':
          value ? setEmpty(false) : setEmpty(true);
          break;
        case 'isEmail':
          const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          regex.test(String(value).toLocaleLowerCase()) ? setEmailError(false) : setEmailError(true);
          break;
        case 'isName':
          setValue(value.replace(/[^a-zA-Zа-яА-ЯёЁ\s-]+$/, ''));
          break;
        default:
          break;
      }
    }
  }, [value]);

  return {
    minLength: validations['minLength'] ? validations['minLength'] : 0,
    minLengthError,
    isEmpty,
    emailError
  }
}

function UseInput(initialValue: string, validations: Ivalidation): IUseInput {
  const [value, setValue] = useState(initialValue);
  const [isDirty, setDirty] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const valid: IUseValidation = useValidation(value, validations, setValue);

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
    onFocus,
    onChange,
    onBlur,
    isDirty,
    setDirty,
    isFocused,
    ...valid
  }
}

export default UseInput;