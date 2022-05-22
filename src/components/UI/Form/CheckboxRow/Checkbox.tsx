import { FC } from 'react';
import styled from "styled-components";

interface IProps {
  title: string;
  name: string;
  value?: string;
  checked?: boolean;
}

export const Checkbox: FC<IProps> = ({ title, name, value, checked }) => {
  return (
    <Label>
      <Input
        type="checkbox"
        name={name}
        value={value}
        defaultChecked={checked}
      />
      {title}
    </Label>
  )
}

const Label = styled.label`
  display: inline-block;
  margin-right: 15px;
  font-size: 1.0625rem;
  font-weight: 600;
`
const Input = styled.input`
  margin-right: 5px;
`
