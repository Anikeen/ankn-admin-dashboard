import { FC, ReactNode } from 'react';
import { Title, Wrapper } from './styled'

interface IProps {
  title: string;
  children: ReactNode;
}

export const CheckboxRow: FC<IProps> = ({ title, children }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      {children}
    </Wrapper>
  )
}
