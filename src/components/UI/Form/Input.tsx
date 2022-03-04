import { FC } from "react";
import { InputProps } from "../../../types/input";
import { InputRow, Label, StyledInput } from "./styled";

export const Input: FC<InputProps> = ({
  id,
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
}) => {

  const hasTransition = (value.length === 0 && isFocused) || (value.length > 0 && isFocused) || (value.length > 0 && !isFocused);

  return (
    <InputRow>
      <Label htmlFor={htmlFor} hasTransition={hasTransition}>
        {labelText}
      </Label>
      <StyledInput
        id={id}
        value={value}
        type={type}
        placeholder={placeholder}
        onFocus={onFocus}
        onChange={onChange}
        onBlur={onBlur}
        isFocused={isFocused}
      />
      {children}
    </InputRow>
  );
}
