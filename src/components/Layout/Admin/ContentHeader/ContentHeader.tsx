import { FC } from "react";
import { Title, Wrapper } from "./styled"

interface IContentHeader {
  title: string;
}

export const ContentHeader: FC<IContentHeader> = ({ title, children }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      {children}
    </Wrapper>
  )
}
