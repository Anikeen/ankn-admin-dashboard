import { FC, ReactNode } from "react"
import styled from "styled-components";

interface IProps {
  width: number;
  children: ReactNode;
}

export const GridItem: FC<IProps> = ({ width, children }) => {
  return (
    <Wrapper width={width}>
      {children}
    </Wrapper>
  )
}

const Wrapper = styled.div<{ width: number }>(({ width }) => `
  flex-basis: ${width}%;
  padding-right: 15px;
  padding-left: 15px;
`)