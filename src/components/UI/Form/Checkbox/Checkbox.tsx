import { Label, SCheckbox } from './styled'
import { FC, useEffect, useState } from 'react';

interface IProps {
  title: string;
  name: string;
  value?: string;
  checked?: boolean;
}

export const Checkbox: FC<IProps> = ({ title, name, value, checked }) => {
  return (
    <Label>
      <SCheckbox
        type="checkbox"
        name={name}
        value={value}
        defaultChecked={checked}
      />
      {title}
    </Label>
  )
}
