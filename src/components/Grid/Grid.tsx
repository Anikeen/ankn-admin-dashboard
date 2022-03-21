import { FC, ReactNode } from "react"
import { GridContainer } from "./styled"

export const Grid: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <GridContainer>
      {children}
    </GridContainer>
  )
}
