import { FC } from "react"
import { Wrapper } from "./styled"

export const Header: FC = ({ children }) => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
}
