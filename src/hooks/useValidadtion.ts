import { useState, useEffect } from "react";


interface Ivalidation {
  minLength?: number;
  isEmail?: boolean;
  isName?: boolean;
  notEmpty?: boolean;
}

export interface IUseValidation {
  minLength: number;
  minLengthError: boolean;
  isEmpty: boolean;
  emailError: boolean;
}

function useValidation(validations: Ivalidation, value: string, setValue: (value: string) => void) {
  const [minLengthError, setMinLengthError] = useState(true);
  const [isEmpty, setEmpty] = useState(true);
  const [emailError, setEmailError] = useState(true);

  useEffect(() => {
    for (const validation in validations) {
      switch (validation) {
        case 'minLength':
          value.length < validations['minLength']! ? setMinLengthError(true) : setMinLengthError(false);
          break;
        case 'notEmpty':
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

export default useValidation;