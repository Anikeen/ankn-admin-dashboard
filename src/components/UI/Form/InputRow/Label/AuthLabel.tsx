import { FC } from "react";
import styled from "styled-components";
import { InputLabelProps } from "../../../../../types/input";

export const AuthLabel: FC<InputLabelProps> = ({
  labelText,
  htmlFor,
  value,
  isFocused,
}) => {

  const hasFocus = (value.length === 0 && isFocused) || (value.length > 0 && isFocused) || (value.length > 0 && !isFocused);

  return (
    <Label htmlFor={htmlFor} hasFocus={hasFocus}>
      {labelText}
    </Label>
  );
}

const Label = styled.label<{ hasFocus: boolean }>(
  ({ hasFocus }) => `
    display: block;
    font-size: 1.1rem;
    line-height: 1;
    transition: all .4s;
    color: ${hasFocus ? '#1877f2' : '#777'};
    transform: ${hasFocus ? 'translateY(0px)' : 'translateY(25px)'};
  `
)