import { FC } from "react";
import { InputProps } from "../../../types/input";
import { InputRow, MainInputLabel, SMainInput } from "./styled";

export const MainInput: FC<InputProps> = ({
  id,
  name,
  value,
  type,
  placeholder,
  labelText,
  onFocus,
  onChange,
  onBlur,
  htmlFor,
  children,
  isFocused,
  isInvalid
}) => {

  return (
    <InputRow>
      <MainInputLabel htmlFor={htmlFor}>
        {labelText}
      </MainInputLabel>
      <SMainInput
        id={id}
        name={name}
        value={value}
        type={type}
        placeholder={placeholder}
        onFocus={onFocus}
        onChange={onChange}
        onBlur={onBlur}
        isFocused={isFocused}
        isInvalid={isInvalid}
      />
      {children}
    </InputRow>
  );
}
