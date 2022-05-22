import { FC, ReactNode } from 'react';
import styled from "styled-components";

interface IProps {
  title: string;
  children: ReactNode;
}

export const CheckboxRow: FC<IProps> = ({ title, children }) => {
  return (
    <div>
      <Title>{title}</Title>
      {children}
    </div>
  )
}

const Title = styled.div`
  margin-bottom: 0.5rem;
  display: block;
  font-size: 1.0625rem;
  font-weight: 600;
`