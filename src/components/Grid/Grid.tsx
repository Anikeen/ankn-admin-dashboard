import { FC, ReactNode } from "react"
import styled from "styled-components";

export const Grid: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
`