import { FC } from "react";
import styled from "styled-components";

interface IProps {
  title: string;
}

export const ContentHeader: FC<IProps> = ({ title, children }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      {children}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 55px;
`
const Title = styled.h1`
  font-size: 1.25rem;
  font-weight: 600;

`