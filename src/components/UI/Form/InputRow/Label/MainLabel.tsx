import { FC } from "react";
import styled from "styled-components";
import { InputLabelProps } from "../../../../../types/input";

export const MainLabel: FC<InputLabelProps> = ({
  labelText,
  htmlFor,
}) => {

  return (
    <Label htmlFor={htmlFor}>
      {labelText}
    </Label>
  );
}

export const Label = styled.label`
  margin-bottom: 0.5rem;
  display: block;
  font-size: 1.0625rem;
  font-weight: 600;
`