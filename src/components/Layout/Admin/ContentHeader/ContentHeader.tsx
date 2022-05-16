import { FC } from "react";
import { Title, Wrapper } from "./styled"

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
